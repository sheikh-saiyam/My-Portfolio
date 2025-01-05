import { useEffect } from "react";
import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";

const HomeLayout = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="mx-auto w-10/12 lg:w-9/12 xl:w-8/12 max-w-[1020px]">
      {/* Hero section */}
      <Hero></Hero>
      {/* About Me section*/}
      <AboutMe></AboutMe>
      {/* Skills section */}
      <Skills></Skills>
      {/* Projects section */}
      <Projects></Projects>
      {/* Contact */}
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
