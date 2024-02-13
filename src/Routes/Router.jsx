import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import MenuLayout from "../page/Menu/MenuLayout/MenuLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children :[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element : <MenuLayout></MenuLayout>
            }
        ]
    }
]);

export default router;