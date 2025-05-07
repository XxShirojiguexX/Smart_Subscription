import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user, loading);

  // if (loading) {
  //   return <span className="loading loading-bars loading-xl"></span>;
  // }
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;

  // <div>
  //   <h2>PrivateRoute</h2>
  //   {children}
  // </div>;

  // return (
  //   <div>
  //     <h1>this is private route</h1>
  //   </div>
  // );
};

export default PrivateRoute;
