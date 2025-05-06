import React from "react";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-5">
          Sign Up Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset space-y-1">
            {/* Name */}
            <label className="label text-base font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
            />

            {/* email */}
            <label className="label text-base font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
            />

            {/*photoURL*/}
            <label className="label text-base font-bold">Photo URL </label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Enter your photoURL"
            />
            {/* password */}
            <label className="label text-base font-bold">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
            />

            <button className="btn btn-neutral text-lg mt-4">Login</button>
            <p className=" pt-3 text-center text-sm px-5">
              Already have an account yet ? Please...{" "}
              <span className="font-semibold text-blue-500">
                <NavLink to="/auth/login">SignIn</NavLink>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
