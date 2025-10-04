// Centralized resume/profile data for the portfolio

const resume = {
  name: 'Divyaprakash Venkatachalam',
  contact: {
    email: 'divyaprakash32@gmail.com',
    phone: '+91-8072597309',
    linkedin: '',
    github: '',
    leetcode: ''
  },
  summary:
    'B.Tech student in Computer Science and Business Systems with strong interest in AI, backend, and full-stack development. Quick learner and collaborative team player experienced in building scalable applications and leading hackathon projects. Skilled in cloud, databases, and modern frameworks.',
  education: [
    {
      institute: 'Muthayammal Engineering College',
      degree: 'B.Tech – Computer Science and Business Systems',
      duration: '2023 – 2027',
      score: 'CGPA: 8.08'
    },
    {
      institute: 'Kalaimagal Matric Hr. Sec. School',
      degree: 'HSC – Mathematics & Computer Science',
      duration: '2009 – 2023'
    }
  ],
  experience: [
    {
      title: 'Backend Intern',
      company: 'Zealous Tech Corp',
      duration: 'Jun 2025 – Jul 2025',
      points: [
        'Developed REST APIs using Node.js and MongoDB for banking modules.',
        'Optimized database queries, improving performance by 30%.',
        'Implemented authentication systems and integrated APIs with frontend.'
      ]
    }
  ],
  projects: [
    {
      title: 'Responsive Calculator',
      description:
        'Modern, fully responsive calculator with scientific functions, dark/light theme toggle, and keyboard support. Built with vanilla JavaScript for optimal performance.',
      link: '',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Banking Backend',
      description:
        'REST APIs with JWT authentication and role-based access control for banking.',
      link: '',
      tags: ['Node.js', 'MongoDB', 'JWT']
    },
    {
      title: 'E-commerce Site (MERN)',
      description:
        'Responsive web app with product filters, cart, and checkout; smooth UX.',
      link: '',
      tags: ['React', 'Node', 'MongoDB']
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio to showcase projects and skills.',
      link: '',
      tags: ['HTML', 'CSS', 'JS']
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'AWS',
      note:
        'Demonstrates foundational cloud knowledge and basic AWS services.'
    },
    {
      name: 'Salesforce Certified Agent Force Specialist',
      issuer: 'Salesforce',
      note:
        'Validates understanding of Salesforce Service Cloud and agent workflows.'
    },
    {
      name: 'ServiceNow Micro-Certifications',
      issuer: 'ServiceNow',
      note: 'Knowledge in ITSM and automation basics.'
    },
    {
      name: 'HackIndia 2025',
      issuer: 'Regional Spark Hackathon',
      note:
        'Selected participant; recognized for innovative problem-solving.'
    },
    {
      name: 'Internship - Zealous Tech Corp',
      issuer: 'Zealous Tech Corp',
      note: 'Backend Intern (Jun 2025 – Jul 2025): Developed REST APIs, optimized database queries, and implemented authentication systems.'
    }
  ],
  skills: {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['React.js', 'Express.js', 'Node.js'],
    databases: ['MySQL', 'MongoDB'],
    cloud: ['AWS (Basic)'],
    tools: ['GitHub', 'VS Code', 'MySQL Workbench'],
    analytics: ['Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib']
  }
};

export default resume;


