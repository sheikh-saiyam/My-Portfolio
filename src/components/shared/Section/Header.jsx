import { useLocation } from "react-router-dom";
import DotDot from "../../../assets/dotFrame.png";

const Header = ({ header }) => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center">
      <div className="w-11/12 flex items-center gap-2">
        <h1 className="text-white tracking-wider flex items-center gap-[8px] text-2xl md:text-3xl lg:text-4xl">
          <span className="text-primaryText font-extrabold italic">#</span>
          <span>{header}</span>
        </h1>
        {location.pathname === "/" ? (
          <hr className="mt-1 border border-primaryText w-3/12 md:w-6/12" />
        ) : (
          <hr className="mt-1 border border-primaryText w-0 md:w-3/12" />
        )}
      </div>
      <div>
        <img className="h-16" src={DotDot} alt="" />
      </div>
    </div>
  );
};

export default Header;
