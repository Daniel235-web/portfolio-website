  "use client";

import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";


export default function About() {
    const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi!, I'm Emmanuel, an adept{" "}
        <span className="font-medium">
          fullstack software developer/engineer
        </span>{" "}
        with a robust networking background. Over two years, I've contributed my
        expertise to esteemed companies like Smile and 9mobile through{" "}
        <span className="font-medium">
          <a href="https://centdoor.com/">"Centdoor.com" </a>
        </span>
        <br />I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span> with the
        help of senior software developers.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and prisma.
        </span>
        I've applied my networking background to excel as a software engineer,{" "}
        Proficient in both front-end and back-end development. My commitment to
        tailored solutions aligns projects seamlessly with business goals. With
        expertise in content management systems, I create engaging websites that
        prioritize user engagement. My holistic perspective, blending
        development and networking, {""}
        ensures every project I undertake is technically proficient and
        business-oriented.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies,reading documentries and listening to
        songs. I also enjoy{" "}
        <span className="font-medium">learning new things!</span>. .
      </p>
    </motion.section>
  );
}
