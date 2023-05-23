import Aos from "aos";
import { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BtnPrimary, BtnSecondary } from "./Btns";
import { CanvasBlog, CanvasProject } from "./Canvas";

const SkillsCard = ({ title, Icon }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-right" className="w-full p-[1px] rounded-[20px]">
      <div className="bg-background-white dark:bg-background-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Icon className="w-16 h-16 object-contain" />
        <h3 className="text-[20px] font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};
const BlogCard = ({ slug, title, desc }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="p-3 blog rounded-lg flex items-center justify-center gap-4 flex-wrap bg-background-white dark:bg-background-black">
      <div className={`data flex-1 text-end`} data-aos={"fade-right"}>
        <h2 className="text-xl mb-5">{title}</h2>
        <p className="mb-5">{desc}</p>
        <div>
          <BtnPrimary href={`/blog/${slug}`} text="أقرا المزيد" />
        </div>
      </div>
      <CanvasBlog projectName={title} aos={"fade-right"} />
    </div>
  );
};
const ProjectCard = ({ justify, name, desc, github, demo }) => {
  return (
    <div className="project flex items-center justify-center gap-4 flex-wrap">
      {justify == "start" && (
        <CanvasProject
          projectName={name}
          aos={justify == "start" ? "fade-right" : "fade-left"}
        />
      )}
      <div
        className={`data flex-1 ${
          justify == "end" ? "text-end" : "text-start"
        }`}
        data-aos={"fade-right"}
      >
        <h2 className="text-xl mb-5">{name}</h2>
        <p className="mb-5">{desc}</p>
        <div className="flex gap-4 items-center justify-center">
          <BtnSecondary href={demo} text="Demo" Icon={CgWebsite} />
          <BtnPrimary href={github} text="Code" Icon={SiGithub} />
        </div>
      </div>
      {justify == "end" && (
        <CanvasProject projectName={name} aos={"fade-right"} />
      )}
    </div>
  );
};

export { SkillsCard, BlogCard, ProjectCard };
