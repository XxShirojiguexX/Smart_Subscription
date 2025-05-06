import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import MyProfile from "../components/MyProfile/MyProfile";
import NewArrival from "../components/NewArrival/NewArrival";
import ServiceContentDetails from "../Pages/ServiceContentDetails/ServiceContentDetails";

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
]);
