import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen ">
    <div className="flex justify-center items-center py-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-5">
          Login Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset space-y-1">
            <label className="label text-base font-bold">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label text-base font-bold">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover font-semibold text-sm">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-neutral text-lg mt-4">Login</button>
            <p className=" pt-3 text-center text-sm px-5">
              Don't have an account yet ? Please...{" "}
              <span className="font-semibold text-blue-500">
                <NavLink to="/auth/register">SignUp</NavLink>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
