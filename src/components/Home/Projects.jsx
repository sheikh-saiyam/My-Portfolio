import Header from "../shared/Section/Header";
// import project1 from "../../assets/projects/project1.png";
// import project2 from "../../assets/projects/project2.png";
// import project3 from "../../assets/projects/project3.png";
// import hoverImg1 from "../../assets/projects/hoverImg (3).png";
// import hoverImg2 from "../../assets/projects/hoverImg (2).png";
// import hoverImg3 from "../../assets/projects/hoverImg (1).png";
import PrimaryButton from "../shared/Button/PrimaryButton";
import { FaLink } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="pb-20">
      {/* section header */}
      <Header header={"Projects"}></Header>
      {/* projects */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-grayText shadow-xl drop-shadow-2xl"
          >
            <Link to={`/project-details/${project.id}`}>
              <div className="cursor-pointer relative h-[200px] w-full overflow-hidden group">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={project.image}
                  alt="Primary Image"
                />
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                  src={project.hoverImage}
                  alt="Hover Image"
                />
              </div>
            </Link>
            <div className="p-4 grid place-content-stretch">
              <ul className="text-grayText border-b border-grayText pb-3 mb-3 flex gap-2 items-center justify-center flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech},</span>
                ))}
              </ul>
              <h2 className="text-2xl mb-2 text-white font-thin">
                {project.name}
              </h2>
              <p className="text-grayText mb-4">
                {project.description.substring(0, 60)}
                ...
              </p>
              <div className="flex items-center justify-between gap-4">
                <Link to={`/project-details/${project.id}`}>
                  <PrimaryButton text={"View Details"} />{" "}
                </Link>
                <a
                  href={project.liveLink}
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
        ))}
      </div>
      {/* projects */}
    </div>
  );
};

export default Projects;
