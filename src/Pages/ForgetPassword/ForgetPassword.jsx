import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { NavLink } from "react-router";

const ForgetPassword = () => {
  const emailRef = useRef();
  const handleForgetPassword = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Send email for Password reset. Please check your email !!");
        emailRef.current.value = "";
      })
      .catch(() => {
        toast("Can't send email for Password reset. Please check Error !!");
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="w-full max-w-md -mt-20 p-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forget password for Email
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="px-4 py-2 border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>
          <div onClick={handleForgetPassword} className="flex justify-center">
            <a className="w-full py-2 text-center font-bold text-white bg-blue-600 rounded-md hover:bg-[#0EA106] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit Email
            </a>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/auth/login"
              className="w-full py-2 text-center font-bold text-white bg-[#0EA106] rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Go to Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
