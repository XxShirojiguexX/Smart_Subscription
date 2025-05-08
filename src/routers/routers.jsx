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
import ErrorCard from "../components/ErrorCard/ErrorCard";
import TermsCondition from "../Pages/NewArrivalContent/TermsCondition/TermsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ContactFooter from "../Pages/ContactFooter/ContactFooter";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import NewArrivalContantCardDetails from "../Pages/NewArrivalContent/NewArrivalContantCardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    // Component: MainLayout,
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorCard></ErrorCard>,
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
        errorElement: <ErrorCard></ErrorCard>,
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
        errorElement: <ErrorCard></ErrorCard>,
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
        errorElement: <ErrorCard></ErrorCard>,
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
        errorElement: <ErrorCard></ErrorCard>,
        loader: () => fetch("/upComingData.json"),
      },
      {
        path: "/newArrivalContentCardDetails/:id",
        element: (
          <PrivateRoute>
            <NewArrivalContantCardDetails></NewArrivalContantCardDetails>
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        ),
        loader: () => fetch("/upComingData.json"),
      },
      {
        path: "/termsCondition",
        element: (
          <PrivateRoute>
            <TermsCondition></TermsCondition>
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
      },

      {
        path: "/privacyPolicy",
        element: (
          <PrivateRoute>
            <PrivacyPolicy></PrivacyPolicy>
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <ContactFooter></ContactFooter>
          </PrivateRoute>
        ),
        errorElement: <ErrorCard></ErrorCard>,
      },
    ],
  },

  {
    path: "/auth",
    // Component: AuthLayout,
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorCard></ErrorCard>,
    children: [
      {
        path: "/auth/login",
        // Component: Login,
        element: <Login></Login>,
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/auth/register",
        // Component: Register,
        element: <Register></Register>,
        errorElement: <ErrorCard></ErrorCard>,
      },
      {
        path: "/auth/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
        errorElement: <ErrorCard></ErrorCard>,
      },
    ],
  },
]);
