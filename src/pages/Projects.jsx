import { useEffect } from "react";
import Header from "../components/shared/Section/Header";
import ProjectCard from "../components/Card/ProjectCard";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const [projects] = useProjects();
  return (
    <div className="mx-auto w-10/12 lg:w-9/12 xl:w-8/12 max-w-[1020px] py-12">
      {/* page header */}
      <Header header={"All Projects"} />

      {/* projects */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
