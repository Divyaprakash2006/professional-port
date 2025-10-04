# 📧 DIVYAPRAKASH V Portfolio Email System

## 🚀 Complete Setup Guide

### ✅ Current Configuration
- **Email**: `diviyaprakash32@gmail.com`
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:8000`
- **Status**: Ready for Gmail app password

### 🔐 Gmail App Password Setup

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** → **2-Step Verification**
3. Follow setup if not enabled

#### Step 2: Generate App Password
1. In **Security** → **2-Step Verification**
2. Scroll down → **App passwords**
3. Select **Mail** → **Generate**
4. **Copy the 16-character password**

#### Step 3: Update .env File
Replace `your-gmail-app-password-here` in `.env` with your actual app password:

```env
EMAIL_PASS=abcdefghijklmnop
```
*(Remove spaces, use actual password)*

### 3. Alternative Email Providers

#### Outlook/Hotmail
```env
# In server.js, change the service to:
service: 'outlook'
```

#### Yahoo
```env
# In server.js, change the service to:
service: 'yahoo'
```

#### Custom SMTP
```javascript
// In server.js, replace the service configuration with:
host: 'your-smtp-server.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
}
```

### 4. Install Dependencies & Run

```bash
# Install new dependencies
npm install

# Run both frontend and backend
npm run dev

# Or run separately:
npm run server  # Backend only (port 5000)
npm start       # Frontend only (port 3000)
```

## 🚀 Features

- ✅ Real-time email sending
- ✅ Auto-reply to sender
- ✅ HTML formatted emails
- ✅ Form validation
- ✅ Error handling
- ✅ Success/error notifications
- ✅ CORS enabled for frontend communication

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid login"** - Check your app password
2. **"Connection refused"** - Ensure backend is running on port 5000
3. **CORS errors** - Backend includes CORS middleware
4. **Network errors** - Check if both servers are running

### Testing the Backend:

```bash
# Test if backend is running
curl http://localhost:5000/api/health

# Test email endpoint (replace with actual data)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## 📁 File Structure

```
port-project/
├── backend/
│   └── server.js          # Express server with email functionality
├── src/
│   └── pages/
│       └── Contact.js     # Updated contact form with API integration
├── .env                   # Your email credentials (keep private!)
├── .env.example          # Template for environment variables
└── EMAIL_SETUP.md        # This guide
```

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use app passwords, not your main email password
- Consider rate limiting for production use
- Validate and sanitize all inputs
