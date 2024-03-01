import { Outlet, useLocation } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Navbar from "../page/Shared/Navbar/Navbar";

const Root = () => {

    const location = useLocation()
    // //console.log(location.pathname)

    const noNavbarFooter = location.pathname.includes('/login') || location.pathname.includes('/register');


    return (
        <div>
            <div className="max-w-full mx-auto">
                {noNavbarFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {noNavbarFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Root;