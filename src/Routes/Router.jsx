import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import MenuLayout from "../page/Menu/MenuLayout/MenuLayout";
import Shop from "../page/Shop/Shop";
import Error from "../page/Error/Error";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Cart from "../page/Cart/Cart";
import PrivetRouter from "./PrivetRouter";


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
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path : "/my-cart",
                element: <PrivetRouter> <Cart></Cart> </PrivetRouter>
            }
        ]
    }
]);

export default router;