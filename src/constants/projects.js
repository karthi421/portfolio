import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFramer,
  SiCss,
} from "react-icons/si";

import {
  TbSql,
  TbBrandOpenai,
} from "react-icons/tb";
const projects = [
  {
    id: 1,

    title: "SkillMutant",

    description:
      "An AI-powered career intelligence platform that helps students analyze resumes, identify skill gaps, prepare for interviews, discover learning paths, and connect with opportunities through an interactive dashboard.",

    features: [
      "AI Resume Analysis",
      "Skill Gap Visualization",
      "AI Mock Interview", 
      "Job Recommendations",
      "Progress Dashboard",
      "Collaborative Learning Rooms",
    ],

    stack: [
  {
  name: "React",
  icon: SiReact,
  color: "#61DAFB",
},
{
  name: "Next.js",
  icon: SiNextdotjs,
  color: "#FFFFFF",
},
{
  name: "Node.js",
  icon: SiNodedotjs,
  color: "#5FA04E",
},
{
  name: "Express",
  icon: SiExpress,
  color: "#E6E6E6",
},
{
  name: "FastAPI",
  icon: TbBrandOpenai,
  color: "#00C7B7",
},
{
  name: "Python",
  icon: SiPython,
  color: "#3776AB",
},
],

    image: "/projects/skillmutant.png",

    github: "https://github.com/yourusername/skillmutant",

    demo: "https://skillmutant.vercel.app",
  },

  {
    id: 2,

    title: "Travel Expense Management",

    description:
      "A SAP ABAP application for managing employee travel requests, approvals, expense tracking, reimbursements, and reporting with role-based access.",

    features: [
      "Travel Request Management",
      "Expense Submission",
      "Approval Workflow",
      "Employee Dashboard",
      "Expense Reports",
      "Role-based Authorization",
    ],

    stack: [
  {
    name: "SAP ABAP",
    icon: TbSql,
    color: "#0FAAFF",
  },
  {
    name: "Core Data Services",
    icon: TbSql,
    color: "#00B8D9",
  },
  {
    name: "Open SQL",
    icon: TbSql,
    color: "#F4B400",
  },
  {
    name: "SAP GUI",
    icon: TbSql,
    color: "#0FAAFF",
  },
],
    image: "/projects/travel-expense.png",

    github: "https://github.com/yourusername/travel-expense",

    demo: "",
  },

  {
    id: 3,

    title: "Portfolio",

    description:
      "A modern developer portfolio showcasing projects, technical skills, experience, and interactive UI built with smooth animations and premium visual effects.",

    features: [
      "Animated Hero",
      "Interactive Skills",
      "Project Showcase",
      "Responsive Design",
      "Framer Motion Animations",
      "Modern UI",
    ],

    stack: [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#A259FF",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
  },
],

    image: "/projects/portfolio.png",

    github: "https://github.com/yourusername/portfolio",

    demo: "https://yourportfolio.vercel.app",
  },
];

export default projects;