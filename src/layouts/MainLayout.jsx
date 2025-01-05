import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-bgColor min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
