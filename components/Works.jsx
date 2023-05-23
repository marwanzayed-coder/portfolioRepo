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
            github="https://github.com/leindademy"
            demo="https://leindademy.github.io/my-project-one/"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
