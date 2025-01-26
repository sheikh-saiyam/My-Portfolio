import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/projects.json");
          const projects = await response.json();
          return projects.find((project) => project.id == params.id);
        },
      },
    ],
  },
]);

export default router;
