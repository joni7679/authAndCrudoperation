import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterUI from "../components/RegisterUI";
import LoginUI from "../components/LoginUI";
import App from "../App";
import DashBoard from "../pages/dashboard/DashBoard";


export const router = createBrowserRouter([
    { path: "/", element: <App /> },

    {
        path: "/login",
        element: <LoginUI />
    },
    {
        path: "/dashboard",
        element: <DashBoard />
    }
])