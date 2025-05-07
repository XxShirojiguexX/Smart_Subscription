import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import userIcon from "/user.png";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    console.log("user trying to logOut");
    signOutUser()
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/myProfile">My-Profile</NavLink>
            </li>
            <li>
              <NavLink to="/newArrival">New-Arrival</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl">
          <img className="h-8 rounded-full" src="/icon.jpeg" alt="logo" />
          <span className="fontPlusJakarta text-xl font-extrabold">
            Smart.Subscription
          </span>
        </NavLink>

        <div className="px-2">{user && user.email}</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 fontMulish text-xl font-bold">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
              to="/myProfile"
            >
              My-Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-800" : "")}
              to="/newArrival"
            >
              New-Arrival
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <div>
          <img
            className="w-16 rounded-full"
            src={`${user ? user.photoURL : userIcon}`}
            alt="user"
          />
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-[#0EA106] rounded-4xl text-white px-5 fontMulish font-bold text-xl"
          >
            LogOut
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className="btn bg-[#0EA106] rounded-4xl text-white px-5 fontMulish font-bold text-xl"
          >
            Log In
          </NavLink>
        )}
        {/* <NavLink
          to="/auth/login"
          className="btn bg-[#0EA106] rounded-4xl text-white px-5 fontMulish font-bold text-xl"
        >
          Log In
        </NavLink> */}
      </div>
    </div>
  );
};

export default NavBar;
