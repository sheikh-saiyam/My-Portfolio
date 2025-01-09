import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const MobileNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  return (
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
  );
};

export default MobileNavbar;
