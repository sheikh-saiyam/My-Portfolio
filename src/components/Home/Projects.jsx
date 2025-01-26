import Header from "../shared/Section/Header";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import ProjectCard from "../Card/ProjectCard";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
  const [projects] = useProjects();
  return (
    <div id="projects" className="pb-20">
      {/* section header */}
      <Header header={"Projects"} />
      
      {/* projects */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <Link
          to={"/projects"}
          className="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base rounded-none border border-primaryText text-white hover:bg-primaryText hover:bg-opacity-20 duration-300 w-full flex gap-2 items-center justify-center"
        >
          View My All Projects <GrLinkNext size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
