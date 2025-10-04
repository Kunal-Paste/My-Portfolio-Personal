import { Icons } from "@/components/icons";
import { Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    video: "assets/videos/cosmicAI.mp4",
    title: "Cosmic AI",
    description:
      "An intelligent real-time chat application powered by GenAI, built with ReactJS, Node.js, Express, Socket.io, and MongoDB to enable seamless user conversations and dynamically generated AI responses.",
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "PineCone",
      "GenAI",
    ],
    links: {
      preview: "https://cosmicai-01zg.onrender.com",
      github: "https://github.com/Kunal-Paste/KEO-bot",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/biteScroll.mp4",
    title: "Bite Scroll",
    description:
      "Magic Bento Box is a platform for creating and sharing magic recipes that can be used in the game.",
    technologies: [
      "React.js",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "ImageKit",
    ],
    links: {
      preview: "https://bitescroll.onrender.com",
      github: "https://github.com/Kunal-Paste/BiteScroll",
      githubApi: "#",
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer",
    company: "CloudTech Ventures, remote",
    description:
      "Currently developing scalable cloud-based applications and microservices. Responsible for architecting solutions, code reviews, and mentoring junior developers in best practices.",
    period: "2023 Jul - present",
    technologies: ["React", "TypeScript", "AWS", "GraphQL", "Kubernetes"],
  },
  {
    title: "Backend Developer Intern",
    company: "DataFlow Systems, remote",
    description:
      "Assisted in developing RESTful APIs and database optimization. Gained experience in agile development methodologies and collaborated with senior developers on complex projects.",
    period: "2023 Jan - 2023 Jul",
    technologies: ["Java", "Spring Boot", "MySQL", "Redis"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations, remote",
    description:
      "Built responsive web applications from concept to deployment. Worked with clients to understand requirements and delivered custom solutions that exceeded expectations.",
    period: "2022 Jul - 2022 Dec",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    title: "Junior Software Engineer",
    company: "TechCorp Solutions, San Francisco CA",
    description:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    period: "2022 Jan - 2022 Jul",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export const skillsData: Skill[] = [
  { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  { name: "Docker", icon: <Icons.docker className="size-12" /> },
  { name: "node", icon: <Icons.node className="size-12" /> },
  { name: "socketio", icon: <Icons.socketio className="size-12" /> },
  { name: "mongodb", icon: <Icons.mongodb className="size-12" /> },
  { name: "Mysql", icon: <Icons.mysql className="size-12" /> },
  { name: "Express", icon: <Icons.express className="size-12" /> },
];
