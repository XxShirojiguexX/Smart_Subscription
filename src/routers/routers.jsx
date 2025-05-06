import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import MyProfile from "../components/MyProfile/MyProfile";
import NewArrival from "../components/NewArrival/NewArrival";
import ServiceContentDetails from "../Pages/ServiceContentDetails/ServiceContentDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/serviceContainerDetails/:id",
        Component: ServiceContentDetails,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/data.json"),
      },

      {
        path: "/myProfile",
        Component: MyProfile,
      },
      {
        path: "/newArrival",
        Component: NewArrival,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/upComingData.json"),
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
