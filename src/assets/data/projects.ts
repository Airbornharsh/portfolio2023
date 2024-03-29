const Projects = [
  {
    name: "Github CodeSpace",
    description:
      "Anyone can run the code from github using this website and can edit it also",
    id: "github-codespace",
    githubLink: "https://github.com/Airbornharsh/github-codespace",
    type: "Website",
    isWebsite: false,
    technologies: [
      { name: "Go Lang" },
      { name: "Gin" },
      { name: "Docker" },
      { name: "WebSockets" },
      { name: "Typescript" },
      { name: "Express" },
    ],
  },
  {
    name: "H Serverless",
    description: "Anyone can run the serverless code",
    id: "h-serverless",
    githubLink: "https://github.com/Airbornharsh/h-serverless",
    type: "Website",
    isWebsite: false,
    technologies: [
      { name: "Typescript" },
      { name: "Express" },
      { name: "NodeJs" },
      { name: "Docker" },
      { name: "Docker Compose" },
    ],
  },
  {
    name: "AWS Services",
    description: "Made aws services from scratch like S3, DynamoDB, Lambda",
    id: "aws-services",
    githubLink: "https://github.com/Airbornharsh/aws-services",
    type: "Website",
    isWebsite: false,
    technologies: [
      { name: "Typescript" },
      { name: "Express" },
      { name: "NodeJs" },
      { name: "Docker" },
    ],
  },
  {
    name: "Code Compiler",
    description:
      "this is a code compiler where you can compile your code and run it. It supports many languages like C, C++, Javascript, Java, GoLang, Python",
    id: "code-coompiler",
    githubLink: "https://github.com/Airbornharsh/code-compiler",
    type: "Website",
    isWebsite: true,
    webLink: "https://code-compiler.harshkeshri.com",
    technologies: [
      { name: "React" },
      { name: "Vite" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "NodeJs" },
    ],
  },
  {
    name: "Chess",
    description:
      "Players can play chess with each other using the link or code",
    id: "chess",
    githubLink: "https://github.com/Airbornharsh/chess",
    type: "Website",
    isWebsite: true,
    webLink: "https://chess.harshkeshri.com",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "MongoDb" },
      { name: "NodeJs" },
      { name: "Firebase" },
    ],
  },
  {
    name: "Twitter Clone",
    description:
      "A clone of Twitter with many features. It includes frontend and backend both",
    id: "twitter-clone",
    githubLink: "https://github.com/Airbornharsh/twitter-clone-frontend",
    type: "Website",
    isWebsite: true,
    webLink: "https://x.harshkeshri.com",
    technologies: [
      { name: "React" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "MongoDb" },
      { name: "NodeJs" },
    ],
  },
  {
    name: "Ecommerce-Backend",
    description: "Ecommerce Backend",
    id: "ecommerce-backend",
    githubLink: "https://github.com/Airbornharsh/ecommerce-backend-go",
    type: "Backend",
    isWebsite: false,
    webLink: "",
    technologies: [{ name: "Go" }, { name: "PostgreSql" }, { name: "Gin" }],
  },
  {
    name: "Holio-Backend",
    description: "Hotel Management System",
    id: "holio-backend",
    githubLink: "https://github.com/Airbornharsh/holio-go",
    type: "Backend",
    isWebsite: false,
    webLink: "",
    technologies: [{ name: "Go" }, { name: "PostgreSql" }, { name: "Gin" }],
  },
  {
    name: "Stums (College Hackathon Project for Tech Fest)",
    description:
      "Students and Faculty manage the Student Profile and student can pay mess bill,fee payment,add leave application and more",
    id: "stums-app",
    githubLink: "https://github.com/Airbornharsh/stums_app",
    type: "App",
    isWebsite: false,
    webLink: "",
    technologies: [{ name: "Flutter" }, { name: "Razorpay" }],
  },
  {
    name: "Stums Backend (College Hackathon Project for Tech Fest)",
    description: "Backend For Stums",
    id: "stums-app",
    githubLink: "https://github.com/Airbornharsh/stums-web-and-server",
    type: "App",
    isWebsite: false,
    webLink: "",
    technologies: [
      { name: "NextJs" },
      { name: "MongoDb" },
      { name: "Razorpay" },
    ],
  },
  {
    name: "Shore App",
    description: "Social Meida App",
    id: "shore-app",
    githubLink: "https://github.com/Airbornharsh/Shore_app",
    type: "App",
    isWebsite: true,
    webLink:
      "https://play.google.com/store/apps/details?id=com.airbornharsh.shore_app",
    technologies: [{ name: "Flutter" }],
  },
  {
    name: "Shore Backend",
    description: "Backend for Shore App",
    id: "shore-backend",
    githubLink: "https://github.com/Airbornharsh/Shore-web-server",
    type: "App",
    isWebsite: true,
    webLink: "https://shore.vercel.app/",
    technologies: [
      { name: "Next Js" },
      { name: "MongoDb" },
      { name: "Node Js" },
    ],
  },
  {
    name: "DTask App",
    description: "You can Store your task and view it as per your Choice",
    id: "mtrace",
    githubLink: "https://github.com/Airbornharsh/DTask-app",
    type: "App",
    isWebsite: true,
    webLink:
      "https://play.google.com/store/apps/details?id=com.airbornharsh.dtask",
    technologies: [{ name: "Flutter" }],
  },
  {
    name: "Mtrace App",
    description:
      "you can store your details about your expenses categories wise (Due to heroku free tier down it is not working fine but it will be in sometime)",
    id: "tracer",
    githubLink: "https://github.com/Airbornharsh/Mtrace-app-and-web-",
    type: "App",
    isWebsite: true,
    webLink:
      "https://play.google.com/store/apps/details?id=com.airbornharsh.mtrace_app",
    technologies: [{ name: "Flutter" }],
  },
  {
    name: "Poll3",
    description:
      "It is Polling app where you can just create your poll and share the link to other and they can vote using crypto wallet. This is based on Web 3 using Goerli Eth",
    githubLink: "https://github.com/Airbornharsh/pollingapp-web3",
    type: "Website",
    isWebsite: true,
    webLink: "https://poll3.vercel.app/",
    technologies: [
      { name: "Solidity" },
      { name: "HardHat" },
      { name: "Next Js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    name: "Gymnaism",
    description:
      "This is a Internship Test project which I was told to craete using React,SST and AWs. Where you can have the videos and courses for gyming. (Backend not working as Aws charges for it)",
    id: "gymnaism",
    githubLink: "https://github.com/Airbornharsh/Gymnaism",
    type: "Website",
    isWebsite: true,
    webLink: "https://gymnaism.netlify.app",
    technologies: [
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Aws" },
      { name: "SST" },
    ],
  },
  {
    name: "Hopl",
    description:
      "This is two service Where customer can shop in the nearby store",
    id: "hopl",
    githubLink: "https://github.com/Airbornharsh/hopl",
    type: "App & Website",
    isWebsite: false,
    webLink: "",
    technologies: [
      { name: "Dart" },
      { name: "JavaScript" },
      { name: "Flutter" },
      { name: "Tailwind CSS" },
      { name: "Mongo Db" },
      { name: "Next Js" },
    ],
  },
  {
    name: "Arime",
    description: "Here you can get any anime Details",
    id: "arime",
    githubLink: "https://github.com/Airbornharsh/Arime",
    type: "Website",
    isWebsite: true,
    webLink: "https://arime.vercel.app",
    technologies: [
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Mongo Db" },
      { name: "Next Js" },
    ],
  },
  {
    name: "Mtrace",
    description:
      "you can store your details about your expenses categories wise (Due to heroku free tier down it is not working fine but it will be in sometime)",
    id: "tracer",
    githubLink: "https://github.com/Airbornharsh/Tracer",
    type: "Website",
    isWebsite: true,
    webLink: "https://mtrace.netlify.app",
    technologies: [
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Mongo Db" },
      { name: "Express" },
    ],
  },
  {
    name: "Tic Tak Toe (Starter)",
    description:
      "It is a game of Tic Tak Toe where two player can player in same device. In future, I will add socket to it so that player can play from different Devices",
    id: "tictaktoe",
    githubLink: "https://github.com/Airbornharsh/TIC_TAK_TOE",
    type: "Website",
    isWebsite: true,
    webLink: "https://airbornharsh.github.io/TIC_TAK_TOE",
    technologies: [{ name: "Html" }, { name: "CSS" }, { name: "JavaScript" }],
  },
  {
    name: "Bingo (Starter)",
    description:
      "It is a game of bingo where two player can player in same device. In future, I will add socket to it so that player can play from different ",
    id: "bingo",
    githubLink: "https://github.com/Airbornharsh/BINGO",
    type: "Website",
    isWebsite: true,
    webLink: "https://airbornharsh.github.io/Snake_and_Ladder",
    technologies: [{ name: "Html" }, { name: "CSS" }, { name: "JavaScript" }],
  },
];

export default Projects;
