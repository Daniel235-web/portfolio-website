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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
      "Stripe Integration",
      "Typescript",
    ],
    imageUrl: hotelManagement,
  },
  {
    title: "Mern_Real_Estate_project",
    description:
      "I built this Mern real estate website. SED Estate is a top real estate agency that helps clients buy, sell, and lease properties in sought-after neighborhoods.",
    tags: [
      "MONGODB",
      "JavaScript",
      "React",
      "Tailwind",
      "Redux",
      "Node.Js",
      "Express.js",
      "insomnia: Open-source Api testing tool",
      "JWT",
      "firebase",
      "Google OAuth",
    ],
    imageUrl: MernRealEstate,
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
  },
  {
    title: "Noc operator",
    description:
      "Worked as a NOC operator here playing a crucial role in monitoring, managing, and maintaining the integrity and efficiency of an organization's network infrastructure",
    tags: ["Linux", "excel", "OWS"],
    imageUrl: centdoorImg ,
  },
  {
    title: "web scraper and a developer",
    description: "worked as a web scraper and a software developer here",
    tags: ["liquid", "javascript", "CSS/SCSS"],
    imageUrl: souquifyImg ,
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
] as const;
