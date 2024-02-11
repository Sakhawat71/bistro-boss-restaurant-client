import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Navbar from "../page/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-full mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;