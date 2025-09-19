// Mock data for the portfolio website

export const personalInfo = {
  name: "Sayyed Rehan",
  title: "Full-Stack JAVA Developer",
  roles: ["React Developer", "Node.js", "UI/UX Enthusiast", "Mobile Developer"],
  bio: "Passionate full-stack java developer with 1+ years of experience building scalable web applications and mobile solutions. I love creating beautiful, functional software that makes a difference.",
  email: "sayyedrehan2800@gmail.com",
  phone: "+918087253122",
  location: "Malkapur,Maharastra",
  avatar: "https://ik.imagekit.io/Sahilansari0002/WhatsApp%20Image%202025-09-05%20at%2000.16.21_3fa01854.jpg?updatedAt=1758299126877",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/mr-rehan19",
    linkedin: "https://www.linkedin.com/in/sayyed-rehan-50a869309/",
    twitter: "https://twitter.com/",
    portfolio: "https://"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, years: 1 },
      { name: "Next.js", level: 85, years: 1},
      { name: "Tailwind CSS", level: 90, years: 1 },
      { name: "JavaScript ", level: 95, years: 1 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, years: 1 },
      { name: "SQLPLUS", level: 80, years: 1 },
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", level: 95, years: 1 },
      { name: "Docker", level: 80, years: 1 },
      { name: "AWS", level: 75, years: 1 },
      { name: "Figma", level: 85, years: 1 },
      { name: "Jest", level: 80, years: 1 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Dashboard",
    shortDescription: "A comprehensive dashboard for tracking and managing corporate sustainability metrics",
    fullDescription: "EcoTrack is a full-stack web application that helps organizations monitor their environmental impact through real-time data visualization and reporting. Built with React, Node.js, and MongoDB, it features interactive charts, automated report generation, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "4 months",
    team: "Solo Project",
    liveUrl: "https://ecotrack-demo.vercel.app",
    githubUrl: "https://github.com/alexmorgan/ecotrack",
    features: [
      "Real-time sustainability metrics tracking",
      "Interactive data visualizations",
      "Automated PDF report generation",
      "Team collaboration and goal setting",
      "Mobile-responsive design"
    ],
    challenges: "Implementing real-time data synchronization across multiple user sessions while maintaining optimal performance.",
    outcome: "Reduced client's manual reporting time by 70% and improved data accuracy by 95%."
  },
  {
    id: 2,
    title: "TaskFlow Mobile App",
    shortDescription: "Cross-platform task management app with real-time collaboration",
    fullDescription: "TaskFlow is a mobile-first task management application built with React Native. It features real-time collaboration, offline functionality, push notifications, and seamless synchronization across devices.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&auto=format",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications", "AsyncStorage"],
    category: "Mobile Application",
    status: "Completed",
    year: "2024",
    duration: "6 months",
    team: "2 Developers",
    liveUrl: "https://taskflow-app.com",
    githubUrl: "https://github.com/alexmorgan/taskflow-mobile",
    features: [
      "Cross-platform compatibility (iOS & Android)",
      "Real-time task synchronization",
      "Offline functionality with sync",
      "Push notifications",
      "Drag-and-drop task management"
    ],
    challenges: "Ensuring smooth offline-to-online synchronization without data conflicts.",
    outcome: "Achieved 4.8/5 star rating on app stores with 50K+ downloads in first 3 months."
  },
  {
    id: 3,
    title: "AI-Powered Content Generator",
    shortDescription: "SaaS platform for automated content creation using GPT integration",
    fullDescription: "A sophisticated SaaS platform that leverages AI to generate high-quality marketing content. Features include template customization, bulk generation, brand voice training, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format",
    technologies: ["Next.js", "OpenAI API", "Stripe", "PostgreSQL", "Prisma", "TypeScript"],
    category: "SaaS Platform",
    status: "In Development",
    year: "2024",
    duration: "Ongoing",
    team: "3 Developers",
    liveUrl: "https://contentgen-ai.com",
    githubUrl: "https://github.com/alexmorgan/content-generator",
    features: [
      "AI-powered content generation",
      "Custom brand voice training",
      "Bulk content processing",
      "Analytics and performance tracking",
      "Subscription-based billing"
    ],
    challenges: "Optimizing AI API costs while maintaining quality and implementing robust content moderation.",
    outcome: "Currently in beta with 500+ users and $5K MRR."
  },
  {
    id: 4,
    title: "DevTools Chrome Extension",
    shortDescription: "Browser extension for enhanced developer productivity and debugging",
    fullDescription: "A comprehensive Chrome extension that enhances developer workflow with advanced debugging tools, code snippets management, API testing, and performance monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&auto=format",
    technologies: ["JavaScript", "Chrome APIs", "React", "IndexedDB", "Webpack"],
    category: "Browser Extension",
    status: "Completed",
    year: "2023",
    duration: "3 months",
    team: "Solo Project",
    liveUrl: "https://chrome.google.com/webstore/detail/devtools-pro",
    githubUrl: "https://github.com/alexmorgan/devtools-extension",
    features: [
      "Advanced debugging utilities",
      "Code snippet management",
      "API testing interface",
      "Performance monitoring",
      "Dark/light theme support"
    ],
    challenges: "Working within Chrome extension security constraints while providing powerful debugging features.",
    outcome: "25K+ active users with 4.6/5 rating on Chrome Web Store."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sahil Ansari",
    role: "Product Manager",
    company: "SkillFirst",
    content: "Rehan delivered exceptional work on our sustainability dashboard. His attention to detail and ability to translate complex requirements into intuitive user experiences is remarkable.",
    avatar: "https://ik.imagekit.io/Sahilansari0002/sahil%20google.jpg?updatedAt=1749125517286",
    rating: 5
  },
  {
    id: 2,
    name: "Mahummad Mudassir",
    role: "",
    company: "",
    content: "Working with Rehan on our mobile app was a game-changer. His React Native expertise and problem-solving skills helped us launch ahead of schedule with outstanding quality.",
    avatar: "https://ik.imagekit.io/Sahilansari0002/WhatsApp%20Image%202025-09-19%20at%2022.08.14_b8f343ea.jpg?updatedAt=1758299923037",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Modern, responsive web applications using React, Next.js, and cutting-edge CSS frameworks",
    icon: "Code",
    features: ["React & Next.js", "Responsive Design", "Performance Optimization", "Modern CSS/SCSS"]
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js, Python, and cloud-based architectures",
    icon: "Server",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"]
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and native technologies",
    icon: "Smartphone",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Functionality"]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centered design solutions that balance aesthetics with functionality",
    icon: "Palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
];

export const experience = [
  {
    id: 1,
    title: "Full-Stack Developer Intern",
    company: "TECH Octanet Service PVT LTD",
    location: "Remote",
    duration: "2025",
    type: "Part-time",
    description: "Lead development of enterprise web applications serving 100K+ users. Mentored junior developers and established coding standards.",
    achievements: [
      "Improved application performance by 40%",
      "Led migration to microservices architecture",
      "Mentored 5+ junior developers"
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable React applications that can grow with your team and user base.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Architecture"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&auto=format",
    featured: true
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development in 2024 and beyond.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    publishDate: "2024-01-08",
    readTime: "6 min read",
    tags: ["Web Development", "Trends", "Technology"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&auto=format",
    featured: false
  },
  {
    id: 3,
    title: "Optimizing React Native Performance",
    excerpt: "Practical tips and techniques for improving the performance of your React Native applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    publishDate: "2024-01-01",
    readTime: "10 min read",
    tags: ["React Native", "Performance", "Mobile"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&auto=format",
    featured: false
  }
];