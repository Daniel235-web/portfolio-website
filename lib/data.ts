import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hotelManagement from "@/public/hotelManagement.png";
import MernRealEstate from "@/public/MernRealEstate.png";
import Saas from "@/public/Saas.png";
import centdoorImg from "@/public/centdoorImg.png";
import souquifyImg from "@/public/souquifyImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Alx software engineering programme",
    location: "Online, Kenya",
    description:
      "I created an Airbnb clone with my mate together then pushed to Github",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },

  {
    title: "Noc Operator ",
    location: "Lagos, Ikoyi",
    description:
      "Worked as a NOC operator here playing a crucial role in monitoring, managing, and maintaining the integrity and efficiency of an organization's network infrastructure",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "web scraper and a full stack developer",
    location: "Souqify.com",
    description: " I worked as web scraper and a developer at souqify.com ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "hotel_Management Project",
    description:
      "I Created this hotel management website for customers to chill and have a good time with families or spouses.",
    tags: [
      "React",
      "Next.js",
      "Sanity.IO",
      "Tailwind",
      "google Apis",
      "CMS",
      "Stripe ",
      "Typescript",
    ],
    imageUrl: hotelManagement,
    link: "https://hotel-management-website-five.vercel.app/",
  },
  {
    title: "Mern_Real_Estate_project",
    description:
      "I created a top-notch website for SED Estate using MERN,  for people to buy, sell, and rent homes in popular neighborhoods.",
    tags: [
      "MONGODB",
      "JS",
      "React",
      "Tailwind",
      "Redux",,
      "Express.js",
      "insomnia",
      "JWT",
      
    ],
    imageUrl: MernRealEstate,
    link: "https://mern-estate-ya0i.onrender.com/",
  },
  {
    title: "Saas_Project",
    description: "created a Saas project for chatting with your documents",
    tags: [
      "React",
      "Next.js",
      "Prisma as ORM",
      "Tailwind",
      "tRPC & Zod",
      "Kinde",
      "stripe integration",
      "shadcn-ui",
      "Chatgpt API KEY",
    ],
    imageUrl: Saas,
    link: "https://saas-daniel235-web.vercel.app/",
  },
  {
    title: "Noc operator",
    description:
      "Worked as a NOC operator here playing a crucial role in monitoring, managing, and maintaining the integrity and efficiency of an organization's network infrastructure",
    tags: ["Linux", "excel", "OWS"],
    imageUrl: centdoorImg,
    link: "https://centdoor.com/",
  },
  {
    title: "web scraper and a developer",
    description: "worked as a web scraper and a software developer here",
    tags: ["liquid", "javascript", "CSS/SCSS"],
    imageUrl: souquifyImg,
    link: "https://souqify.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "linux",
  "CMS",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Firebase",
  "insomnia: For testing and debugging HTTP APIs",
] as const;
