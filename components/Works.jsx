import Aos from "aos";
import React, { useEffect } from "react";
import Title from "./ui/Title";
import { ProjectCard } from "./ui/Card";

const Works = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="works snap-start" id="work">
      <div className="container relative min-h-screen pt-[100px]">
        <Title title="My Project" />
        <div className="projects mt-5 flex flex-col gap-5">
          <ProjectCard
            justify="start" // start - end
            name="Ecommerce Api"
            desc="Api for the ecommerce website with the same elements as the Noon website"
            github="https://github.com/marwanzayed-coder/ecommerce-api"
            demo="https://documenter.getpostman.com/view/25881677/2s93RMWw6o"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
