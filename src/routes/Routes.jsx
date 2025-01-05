import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
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
