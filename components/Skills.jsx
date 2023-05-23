import React, { useEffect, useState } from "react";
import Aos from "aos";
import Title from "./ui/Title";
import axios from "axios";
import { SkillsCard } from "./ui/Card";
import Icons from "./Icons";

const Skills = ({ skills }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  // console.log(skills);

  return (
    <div className="skills snap-start overflow-x-hidden" id="skills">
      <div className="container relative min-h-screen pt-[100px]">
        <Title title="Skills" />
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkillsCard title="HTML" Icon={Icons.html} />
          <SkillsCard title="CSS" Icon={Icons.css} />
          <SkillsCard title="JavaScript" Icon={Icons.js} />
          <SkillsCard title="React" Icon={Icons.react} />
          <SkillsCard title="Bootstrap" Icon={Icons.bootstrap} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const skills = await axios.get(`http://localhost:5000/api/v1/skills`);
  console.log(skills);
  return {
    props: {
      skills,
    },
  };
}

export default Skills;
