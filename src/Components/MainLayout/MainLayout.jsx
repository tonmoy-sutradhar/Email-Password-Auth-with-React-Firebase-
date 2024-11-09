import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <div className="h-8">
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-253px)] py-12 container mx-auto px-11">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
