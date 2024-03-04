import { Outlet } from "react-router-dom";

const DashBoard = () => {


    return (
        <div className="mx-auto max-w-7xl">

            <div className="w-64 min-h-screen bg-[#D1A054]">

            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;