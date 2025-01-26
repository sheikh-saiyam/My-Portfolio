import { Link } from "react-router-dom";
import PrimaryButton from "../shared/Button/PrimaryButton";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { id, image, hoverImage, technologies, description, liveLink } =
    project || {};
    
  return (
    <div className="border border-grayText shadow-xl drop-shadow-2xl">
      <Link to={`/project-details/${id}`}>
        <div className="cursor-pointer relative h-[200px] w-full overflow-hidden group">
          <img
            className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={image}
            alt="Primary Image"
          />
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            src={hoverImage}
            alt="Hover Image"
          />
        </div>
      </Link>
      <div className="p-4 grid place-content-stretch">
        <ul className="text-grayText border-b border-grayText pb-3 mb-3 flex gap-2 items-center justify-center flex-wrap">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex}>{tech},</span>
          ))}
        </ul>
        <h2 className="text-2xl mb-2 text-white font-thin">{name}</h2>
        <p className="text-grayText mb-4">
          {description.substring(0, 60)}
          ...
        </p>
        <div className="flex items-center justify-between gap-4">
          <Link to={`/project-details/${id}`}>
            <PrimaryButton text={"View Details"} />{" "}
          </Link>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryText underline flex gap-1 items-center"
          >
            <FaLink />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
