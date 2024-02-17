import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import MenuLayout from "../page/Menu/MenuLayout/MenuLayout";
import Shop from "../page/Shop/Shop";
import Error from "../page/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <Error></Error>,
        children :[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element : <MenuLayout></MenuLayout>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
        ]
    }
]);

export default router;