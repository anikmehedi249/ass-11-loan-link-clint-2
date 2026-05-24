import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import HomeLayout from "../Components/Home/HomeLayout";




export const router = createBrowserRouter([ 
    {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children:[
        {
            index: true,
            element: <Home/>
        }
    ]
}
])