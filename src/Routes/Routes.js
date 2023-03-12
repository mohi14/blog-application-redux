import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Shared/Main";
import Blogs from "../Pages/BlogDetails";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    }
])