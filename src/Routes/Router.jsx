import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home/Home";
import MenuLayout from "../page/Menu/MenuLayout/MenuLayout";
import Shop from "../page/Shop/Shop";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
// import Cart from "../page/Cart/Cart";
import PrivetRouter from "./PrivetRouter";
import DashBoard from "../Layout/DashBoard";
import LandingDash from "../page/Dashboard/LandingPage/LandingDash";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import UserCart from "../page/Dashboard/UserCart/UserCart";
import AllUsers from "../page/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../page/Dashboard/Admin/AddItems/AddItems";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
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
                path : "/contact",
                element: <div><h1>Contact</h1></div>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRouter><DashBoard></DashBoard></PrivetRouter>,
        children: [
            {
                path: '/dashboard',
                element: <LandingDash></LandingDash>
            },
            {
                path: "user-home",
                element: <div> <h1>Hello welcome</h1></div>
            },
            {
                path: "reservation",
                element: <div> reservation</div>
            },
            {
                path: "payment-history",
                element: <div> payment-history</div>
            },
            {
                path: "user-cart",
                element: <UserCart></UserCart> 
            },
            {
                path: "add-review",
                element: <div> add-review</div>
            },
            {
                path: "user-booking",
                element: <div> user-booking</div>
            },

            // admin releted route
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "add-items",
                element: <AdminRoute> <AddItems></AddItems> </AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute> <div>Manage Items</div> </AdminRoute>
            },
            {
                path: "manage-bookings",
                element: <AdminRoute> <div>Manage Bookings</div> </AdminRoute>
            }
        ]
    },

]);

export default router;