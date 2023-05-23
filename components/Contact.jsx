import Aos from "aos";
import { useEffect, useState } from "react";
import { Inputs, Textarea } from "./ui/Inputs";
import Title from "./ui/Title";
import { BtnForms, BtnPrimary } from "./ui/Btns";

const Contact = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    Aos.init();
  }, []);
  const changeData = (name, value) => {
    setData({ ...data, [name]: value });
  };
  return (
    <div className="contact snap-start overflow-x-hidden" id="contact">
      <div className="container relative mb-10 pt-[100px]">
        <Title title="Contact Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
          <div></div>
          <form action="" className="mt-5">
            <Inputs
              name="name"
              id="name"
              label="Your Name"
              onChangeFunc={(e) => changeData(e.target.name, e.target.value)}
            />
            <Inputs
              name="email"
              type="email"
              id="email"
              label="Your Email"
              onChangeFunc={(e) => changeData(e.target.name, e.target.value)}
            />
            <Inputs
              name="subject"
              id="subject"
              label="Subject"
              onChangeFunc={(e) => changeData(e.target.name, e.target.value)}
            />
            <Textarea
              name="message"
              id="message"
              label="Your Message"
              onChangeFunc={(e) => changeData(e.target.name, e.target.value)}
            />
            <BtnForms text="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
