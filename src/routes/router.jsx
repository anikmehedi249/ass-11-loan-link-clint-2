import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../Components/Home/HomeLayout";
import ErrorElement from "../Pages/Utility/ErrorElement";
import AuthLayout from "../Components/Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorElement2 from "../Pages/Utility/ErrorElement2";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import AddLoan from "../Pages/Dashboard/Manager/AddLoan";
import PrivateRoutes from "./PrivateRoutes";






export const router = createBrowserRouter([ 
    {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    errorElement: <ErrorElement2></ErrorElement2>,
    children:[
        {
            index: true,
            element: <Home/>
        }
    ]
},
{
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
                {
                    path: "login",
                    element:<Login></Login>
                },
                {
                    path: "register",
                    element:<Register></Register>
                }
    ]       
},
{
    path: "/dashboard",
    element:<PrivateRoutes>
        <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
    children:[
        {
            path: "add-loan",
            element: <AddLoan></AddLoan>
        },
    ]
},
{
    path: "*",
    element: <ErrorElement />
}
])