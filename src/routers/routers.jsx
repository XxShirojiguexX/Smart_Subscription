import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import MyProfile from "../components/MyProfile/MyProfile";
import NewArrival from "../components/NewArrival/NewArrival";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ServiceContentDetails from "../components/ServiceContentDetails/ServiceContentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    // Component: MainLayout,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        // Component: Home,
        element: <Home></Home>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/data.json"),
      },
      // {
      //   path: "/serviceContainerDetails/:id",
      //   element: <ServiceContentDetails></ServiceContentDetails>,
      //   hydrateFallbackElement: (
      //     <p>
      //       <span className="loading loading-dots loading-xl"></span>
      //     </p>
      //   ),
      //   loader: () => fetch("/data.json"),
      // },
      {
        path: "/serviceContainerDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceContentDetails></ServiceContentDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/data.json"),
      },

      {
        path: "/myProfile",
        // Component: MyProfile,
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/newArrival",
        // Component: NewArrival,
        element: (
          <PrivateRoute>
            <NewArrival></NewArrival>
          </PrivateRoute>
        ),
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
    // Component: AuthLayout,
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        // Component: Login,
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        // Component: Register,
        element: <Register></Register>,
      },
    ],
  },
]);
