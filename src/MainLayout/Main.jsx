import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Sheared/Navbar";
import Footer from "../Sheared/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col w-10/12 mx-auto">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
