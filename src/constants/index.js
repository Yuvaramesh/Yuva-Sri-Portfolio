const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#featurecards",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 60, suffix: "+", label: "Completed Projects" },
  { value: 4, suffix: "+", label: "Internships" },
  { value: 10, suffix: "+", label: "Hackathons" },
];

const logoIconsList = [
  {
    imgPath: "/public/python-svgrepo-com.svg",
  },
  {
    imgPath: "/public/react.png",
  },
  {
    imgPath: "/public/numpy.jpeg",
  },
  {
    imgPath: "/public/tensorflow.jpeg",
  },
  {
    imgPath: "/public/figma.jpeg",
  },
  {
    imgPath: "/public/ollama.png",
  },
  {
    imgPath: "/public/flask.png",
  },
  {
    imgPath: "/public/pandas.png",
  },
  {
    imgPath: "/public/rag.png",
  },
  {
    imgPath: "/public/docker.png",
  },
  {
    imgPath: "/public/mongodb.png",
  },
];

const abilities = [
  {
    imgPath: "/images/chat.png",
    title: "Smart Decision Making",
    desc: "Using AI models and real-time data analysis to provide actionable insights, enabling data-driven decisions with greater accuracy.",
  },
  {
    imgPath: "/images/time.png",
    title: "Intelligent Automation",
    desc: "Leveraging machine learning to automate tasks and workflows, boosting efficiency and minimizing manual errors across systems.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Personalized User Experiences",
    desc: "Leveraging LLMS, RAG, and LangChain for tailored content and recommendations based on user behavior.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    // review:
    //   "Yuva brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    // // imgPath: "/public/python-svgrepo-com.svg",
    logoPath: "/public/python-svgrepo-com.svg",
    title: "Software Developement Engineer",

    date: "April 2024 - April 2025",
    responsibilities: [
      "Developed and automated end-to-end test cases using Selenium and Playwright for web applications.",
      "Conducted penetration testing and implemented basic security validations in test pipelines.",
      "Collaborated with the QA team to identify vulnerabilities and ensure consistent testing across platforms.",
    ],
  },

  {
    // review:
    //   "Yuva's contributions to Docker's web applications have been outstanding. She approaches challenges with a problem-solving mindset.",
    // imgPath: "/public/react.png",
    logoPath: "/public/react.png",
    title: "Full Stack Developer Intern",

    date: "June 2023 - July 2023",
    responsibilities: [
      "Designed and deployed a House Price Prediction website integrating ML models and interactive UI.",
      "Implemented both backend logic and frontend components for a seamless user experience.",
      " Conducted testing and debugging to ensure production readiness.",
    ],
  },
  {
    // review:
    //   "Yuva's work on LLMs brought a high level of quality and efficiency. She delivered solutions that enhanced our user experience & meet our product goals.",
    // imgPath: "/public/rag.png",
    logoPath: "/public/rag.png",
    title: "AI/ML Engineer",
    date: "Feb 2024 - Feb 2024",
    responsibilities: [
      "Built AI solutions using Large Language Models (LLMs), leveraging tools like Langchain and crewAI.",
      "Designed and implemented Retrieval-Augmented Generation (RAG) pipelines for intelligent, context-aware responses.",
      "Fine-tuned open-source LLMs and integrated them with vector databases like Qdrant and FAISS.",
      "Developed AI-powered feedback systems and chatbots to deliver personalized learning and conversation experiences.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/yuvi_ramesh_/",
  },

  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/yuva_sri_ramesh",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/yuvasri-r/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
