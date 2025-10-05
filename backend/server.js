const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? true // Allow all origins in production (Render will set specific domain)
        : [
            "http://localhost:3000",
            "http://localhost:5000",
            "http://localhost:3001",
            "http://127.0.0.1:49675",
            "http://127.0.0.1:5000", // Added for React dev server
          ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // Determine build path - check multiple possible locations for Render deployment
  let buildPath;

  // Try different possible build locations for Render
  const possiblePaths = [
    path.join(__dirname, "../build"),          // Standard location (backend/../build)
    path.join(__dirname, "../../build"),       // If backend is in a subfolder
    path.join(process.cwd(), "build"),         // Project root build
    path.join(process.cwd(), "src/build"),     // src/build (as mentioned in error)
  ];

  for (const testPath of possiblePaths) {
    if (require("fs").existsSync(path.join(testPath, "index.html"))) {
      buildPath = testPath;
      break;
    }
  }

  if (!buildPath) {
    console.error("❌ Build path not found! Checked paths:", possiblePaths);
    console.error("Make sure to run 'npm run build' before deploying");
    process.exit(1);
  }

  console.log("✅ Found build path:", buildPath);
  app.use(express.static(buildPath));

  // Handle React Router - send all non-API requests to index.html
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/")) {
      const indexPath = path.join(buildPath, "index.html");
      console.log("Serving index.html from:", indexPath);
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error("Error serving index.html:", err);
          res.status(500).send("Error loading application");
        }
      });
    }
  });
}

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
    // Connection settings for better reliability
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000, // 60 seconds
  });
};

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASS) {
      console.error("Email not configured - missing EMAIL_USER or EMAIL_APP_PASS");
      return res.status(500).json({
        success: false,
        message: "Email service not configured",
      });
    }

    // Email options for notification to you
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `🔔 New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Contact Message</h1>
            <p style="color: #e8f4f8; margin: 10px 0 0 0;">From your portfolio website</p>
            <p style="color: #e8f4f8; margin: 10px 0 0 0;">This email was sent from your portfolio website contact form.</p>
            <p style="color: #e8f4f8; margin: 10px 0 0 0;">Please reply to this email to respond to the sender.</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #667eea;">
              <h3 style="color: #495057; margin-top: 0; font-size: 18px;">👤 Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e9ecef; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #495057; margin-top: 0; font-size: 18px;">💬 Message</h3>
              <p style="line-height: 1.8; color: #6c757d; font-size: 16px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; text-align: center;">
              <p style="margin: 0; color: white; font-weight: 500;">
                🚀 Reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; background: #e9ecef;">
            <p style="margin: 0; font-size: 14px; color: #6c757d;">
              Generated by DIVYAPRAKASH V Portfolio Contact System
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply email options
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Message Received - DIVYAPRAKASH V",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✅ Message Received!</h1>
            <p style="color: #e8f4f8; margin: 10px 0 0 0;">Thank you for reaching out</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #4facfe;">
              <p style="margin: 0; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
              <p style="margin: 15px 0; line-height: 1.6;">
                Thank you for contacting me through my portfolio website! 🚀 I have successfully received your message and will get back to you as soon as possible.
              </p>
              <p style="margin: 15px 0; line-height: 1.6;">
                I typically respond within <strong>24-48 hours</strong>. In the meantime, feel free to check out my other projects on my portfolio.
              </p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e9ecef; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #495057; margin-top: 0; font-size: 18px;">📝 Your Message</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #4facfe;">
                <p style="line-height: 1.8; color: #6c757d; font-size: 15px; margin: 0; white-space: pre-wrap;">"${message}"</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; text-align: center;">
              <p style="margin: 0 0 15px 0; color: white; font-weight: 500;">
                🔗 Let's connect and collaborate!
              </p>
              <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                <a href="https://www.linkedin.com/in/divyaprakash-v-2036222a5" 
                   style="display: inline-block; padding: 8px 16px; background: #0077b5; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; transition: all 0.3s ease;">
                  💼 LinkedIn Profile
                </a>
                <a href="https://github.com/divyaprakash-v" 
                   style="display: inline-block; padding: 8px 16px; background: #333; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; transition: all 0.3s ease;">
                  🚀 GitHub Projects
                </a>
              </div>
            </div>
          </div>
          
          <div style="padding: 25px; text-align: center; background: #e9ecef;">
            <p style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #495057;">
              Best regards,<br>
              <span style="color: #4facfe;">DIVYAPRAKASH V</span>
            </p>
            <p style="margin: 0; font-size: 14px; color: #6c757d;">
              B.Tech Computer Science & Business Systems<br>
              Full-Stack Developer | AI Enthusiast
            </p>
          </div>
        </div>
      `,
    };

    // Send notification email
    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Notification email sent successfully");
    } catch (emailError) {
      console.error("❌ Notification email failed:", emailError.message);
      // Continue with auto-reply even if notification fails
    }

    // Send auto-reply email
    try {
      await transporter.sendMail(autoReplyOptions);
      console.log("✅ Auto-reply email sent successfully");
    } catch (emailError) {
      console.error("❌ Auto-reply email failed:", emailError.message);
      // Continue even if auto-reply fails
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(
    `📧 Email service configured with: ${process.env.EMAIL_USER || "Not configured"}`,
  );
});
