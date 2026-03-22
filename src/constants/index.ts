import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TCertificate,
} from "../types";

import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  varcons_logo,
  globussoft_logo,
  power_ads_spy,
  adsgpt_img,
  crane_book,
  jewellery_app,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack MERN (MongoDB, Express, React, Node)",
    icon: web,
  },
  {
    title: "Frontend (React, Redux, TypeScript, Tailwind, Bootstrap, HTML, CSS)",
    icon: reactjs,
  },
  {
    title: "Backend (Node.js, Express, REST APIs, JWT, MVC, Middleware, Async)",
    icon: nodejs,
  },
  {
    title: "Mobile Apps (React Native)",
    icon: mobile,
  },
  {
    title: "Databases (MongoDB, MySQL, PostgreSQL, Redis, Elasticsearch)",
    icon: mongodb,
  },
  {
    title: "DevOps (Docker, AWS, CI/CD, Jenkins, PM2, Linux)",
    icon: docker,
  },
  {
    title: "Tools & Testing (Git, GitHub, Postman, Swagger, API Security)",
    icon: git,
  },
  {
    title: "Performance & Integrations (Optimization, Third-Party APIs)",
    icon: javascript,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Varcons Technology",
    icon: varcons_logo,
    iconBg: "#383E56",
    date: "March 2023 - Sep 2023",
 points: [
  "Assisted in building web pages using HTML5 and CSS3 with clean structure and basic styling.",
  "Implemented simple interactivity using JavaScript to enhance user experience.",
  "Worked on responsive design to ensure compatibility across different devices and screen sizes.",
  "Wrote basic SQL queries for data retrieval and updates under guidance from senior developers.",
  "Collaborated with team members and learned best practices in web development and coding standards.",
]
  },
  {
    title: "Software Developer",
    companyName: "Globussoft Technology",
    icon: globussoft_logo,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2025",
  points: [
  "Designed, developed, and maintained scalable RESTful APIs using Node.js and Express.js following MVC architecture for production-grade applications.",
  "Implemented secure authentication and authorization using JWT, along with middleware for protected API routes.",
  "Worked extensively with MongoDB and SQL databases, optimizing queries and indexing to enhance performance.",
  "Integrated Redis caching to reduce database load and significantly improve API response times under high concurrency.",
  "Built and maintained scalable backend systems using Node.js, Express.js, MongoDB, Redis, Docker, and AWS in production environments.",
  "Collaborated closely with frontend teams (React.js) to ensure seamless client-server communication and efficient data flow.",
  "Participated in code reviews, debugging, performance tuning, and deployment using Docker and AWS (EC2, S3).",
]
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "PowerAdSpy",
    description:
      "A production-grade ad intelligence platform where I built scalable REST APIs for real-time ad data retrieval and processing. Implemented secure JWT authentication, optimized MongoDB queries for high-traffic performance, and followed MVC architecture for maintainability.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "restapi", color: "blue-text-gradient" },
      { name: "jwt", color: "pink-text-gradient" },
    ],
    image: power_ads_spy, // replace with your project image if available
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AdsGPT",
    description:
      "AI-powered ad creative generator that produces text, images, and videos through a real-time chat interface. Built scalable backend services using Node.js and Express.js, integrated AI APIs, and implemented Redis caching to improve performance under high concurrency.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "ai", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
    ],
    image: adsgpt_img, // replace with your project image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Crane Booking App",
    description:
      "Developed a full-stack booking platform similar to Rapido, allowing users to request crane services, track bookings, and manage orders. Built REST APIs, handled real-time data flow, and designed scalable backend architecture.",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: crane_book,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Jewellery Shop App",
    description:
      "Created a mobile-responsive jewellery platform where users can browse designs by category and directly connect via WhatsApp for inquiries. Focused on UI/UX, performance, and seamless user interaction.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "whatsapp", color: "green-text-gradient" },
    ],
    image: jewellery_app,
    sourceCodeLink: "https://github.com/",
  },
];

const certificates: TCertificate[] = [
  {
    title: "Selected for Pre-RDC-1 Camp",
    issuer: "National Cadet Corps (NCC), India",
    date: "2023",
    description:"Selected for Pre-Republic Day Camp (Pre-RDC-1), a national-level NCC camp, demonstrating strong discipline, fitness, and leadership.",
    category: "army",
  },
  {
    title: "District Level Chess Champion",
    issuer: "District Sports Authority",
    date: "2015",
    description:
      "Won the District Level Chess Championship, demonstrating strong strategic thinking, problem-solving ability, and mental discipline in competitive play.",
    category: "participation",
  },
  {
    title: "Academic Excellence — 1st Rank & Distinction",
    issuer: "KSEEB & VTU",
    date: "2017, 2019 & 2023",
    description:"Secured 1st Rank in SSLC (2017) and PUC (Science - PCMB, 2019), and graduated with Distinction in BE (ECE) from VTU in 2023.",
   category: "academic",
  },
  {
    title: "Multi-Cloud DevOps Workshop",
    issuer: "Workshop / Training Program",
    date: "2025",
    description:"Attended a Multi-Cloud DevOps workshop and gained hands-on experience with key AWS tools and cloud concepts.",
    category: "technical",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
