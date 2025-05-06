import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div className="">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="bg-base-300">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AuthLayout;
