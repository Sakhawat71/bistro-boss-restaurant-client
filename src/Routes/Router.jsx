import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children :[
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);

export default router;