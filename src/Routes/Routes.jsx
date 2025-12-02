import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsProject from "../pages/Details/DetailsProject";
import ErrorPage from "../pages/Error/ErrorPage";


  
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "project_details/:id",
                element: <DetailsProject></DetailsProject>,
            }
        ]
    },
],
);