import Aos from "aos";
import { useEffect } from "react";

const Title = ({ title, dir }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div dir={dir || "ltr"} className="relative w-full" data-aos="fade-right">
      <h2 className={dir == "rtl" ? "title-ar" : "title"}>{title}</h2>
      <span
        className={dir == "rtl" ? "title-before-ar" : "title-before"}
      ></span>
    </div>
  );
};

export default Title;
