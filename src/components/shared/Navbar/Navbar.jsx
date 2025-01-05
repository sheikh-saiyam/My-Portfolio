import { useState } from "react";
import logo from "../../../assets/PortfolioLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const location = useLocation();
  return (
    <div className="bg-secondBgColor">
      <div className="w-11/12 mx-auto md:w-10/12 p-6 flex justify-between items-center">
        {/* img div */}
        <div>
          <NavLink to={"/"}>
            <img className="w-[100px] h-16" src={logo} alt="" />
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
              <FaTimes className="fixed bg-secondBgColor border-grayText border rounded-full p-2 text-white text-4xl -ml-4" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile NavLinks with Sliding Effect */}
        <div
          className={`fixed z-50 top-0 left-0 w-9/12 min-h-screen bg-secondBgColor transition-transform duration-500 transform flex flex-col items-center ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex justify-center py-4`}
        >
          <ul className="flex flex-col items-center gap-y-6">
            <li className="text-white font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #{" "}
              </span>
              {location.pathname === "/" ? (
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  to="hero"
                  smooth={true}
                  duration={700}
                  className="cursor-pointer hover:underline underline-offset-4"
                >
                  Home
                </Link>
              ) : (
                <NavLink
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer hover:underline underline-offset-4"
                >
                  Home
                </NavLink>
              )}
            </li>
            <li className="text-white font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #{" "}
              </span>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                to="about-me"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                About Me
              </Link>
            </li>
            <li className="text-white font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #{" "}
              </span>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                to="skills"
                smooth={true}
                duration={700}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Skills
              </Link>
            </li>
            <li className="text-white font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #{" "}
              </span>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                to="projects"
                smooth={true}
                duration={700}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li className="text-white font-medium hover:text-[#ABB2BF]">
              <span className="text-primaryText font-extrabold hover:text-white">
                #{" "}
              </span>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                to="contact"
                smooth={true}
                duration={700}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
