import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children :[
            {
                path: "/",
                element: <div>test</div>
            }
        ]
    }
]);

export default router;