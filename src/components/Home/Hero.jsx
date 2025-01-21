import { Typewriter } from "react-simple-typewriter";
import heroImg from "../../assets/heroImg.png";
import PrimaryButton from "../shared/Button/PrimaryButton";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <div id="hero" className="py-20">
      <div className="flex flex-col md:flex-row md:flex items-center justify-between gap-8">
        {/* img div */}
        <div>
          <img
            className="animate-bounce border-l border-b border-primaryText border-dashed rounded-3xl"
            src={heroImg}
            alt=""
          />
        </div>
        {/* img div */}
        {/* text div */}
        <div className="flex items-center gap-8 justify-between">
          <div className="select-none">
            <div className="mb-8 p-1 text-base md:text-lg md:p-2 w-fit rounded-none border-grayText border text-center">
              <span className="text-grayText">Hey there!</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] mb-6 text-white tracking-widest">
              I<span className="text-primaryText">&apos;</span>m Sh
              <span className="text-primaryText">ei</span>kh Saiy
              <span className="text-primaryText">am</span>
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-6 text-white tracking-wide">
              <span className="wavey-typewriter">
                A{" "}
                <Typewriter
                  words={[
                    "Web Developer",
                    "Front-End Web Developer",
                    "Problem Solver",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1tY0Gbj4WVQCAZgiP6C3E5IGff6qE7SuP/view"
            >
              <PrimaryButton text={"Download Resume"}></PrimaryButton>
            </a>
          </div>
          {/* social links */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center gap-y-1 text-grayText hover:text-primaryText duration-300">
              <a
                href={"https://github.com/sheikh-saiyam"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <FaGithub />
              </a>
              <hr className="w-px h-4 md:h-6 lg:h-8 border-l-2 border-grayText" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 text-grayText hover:text-primaryText duration-300">
              <a
                href={"https://www.linkedin.com/in/sheikh-saiyam"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <FaLinkedin />
              </a>
              <hr className="w-px h-4 md:h-6 lg:h-8 border-l-2 border-grayText" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 text-grayText hover:text-primaryText duration-300">
              <a
                href={"https://www.facebook.com/shiekh.barshaad"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <FaFacebook></FaFacebook>
              </a>
              <hr className="w-px h-4 md:h-6 lg:h-8 border-l-2 border-grayText" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 text-grayText hover:text-primaryText duration-300">
              <button className="text-2xl">
                <FaSquareXTwitter />
              </button>
              <hr className="w-px h-4 md:h-6 lg:h-8 border-l-2 border-grayText" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 text-grayText hover:text-primaryText duration-300">
              <a
                href={"https://www.instagram.com/barshaad_29/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* social links */}
        </div>
        {/* text div */}
      </div>
    </div>
  );
};

export default Hero;
