import React from "react";

import NavBar from "../components/NavBar/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className=" min-h-[calc(100vh-381px)]">
        <div className="max-w-screen-2xl mx-auto">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
