import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-secondBgColor sticky top-0 z-50">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-[1270px] py-10 flex justify-between items-center  border-b border-grayText">
        {/* img div */}
        <div>
          <NavLink to={"/"}>
            <h1 className="text-2xl text-center text-white tracking-widest font-bold">
              <span className="text-primaryText">{"<"}</span>Sh
              <span className="text-primaryText">ei</span>kh Saiy
              <span className="text-primaryText">am{"/>"}</span>
            </h1>
          </NavLink>
        </div>
        {/* img div */}

        {/* NavLinks */}
        <div className="hidden lg:flex">
          <ul className="flex gap-x-12">
            <li className="text-white flex gap-[2px] items-center font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #
              </span>
              <NavLink
                to={"/"}
                className="cursor-pointer underline hover:underline underline-offset-4"
              >
                Home
              </NavLink>
            </li>
            <li className="text-white flex gap-[2px] items-center font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #
              </span>
              <Link
                to="about-me"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                About Me
              </Link>
            </li>
            <li className="text-white flex gap-[2px] items-center font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #
              </span>
              <Link
                to="skills"
                smooth={true}
                duration={700}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Skills
              </Link>
            </li>
            <li className="text-white flex gap-[2px] items-center font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #
              </span>
              <Link
                to="projects"
                smooth={true}
                duration={700}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li className="text-white flex gap-[2px] items-center font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #
              </span>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* NavLinks */}

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile NavLinks with Sliding Effect */}
        <MobileNavbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        {/* Mobile NavLinks with Sliding Effect */}
      </div>
    </div>
  );
};

export default Navbar;
