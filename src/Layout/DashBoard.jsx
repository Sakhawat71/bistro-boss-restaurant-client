import { FaCalendarAlt, FaCartPlus, FaHome, FaWallet } from "react-icons/fa";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdMail, MdRateReview } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {


    return (
        <div className="mx-auto max-w-7xl flex gap-10">

            <div className="w-64 min-h-screen uppercase bg-[#D1A054]">

                <div className="text-center pt-8 pb-5">
                    <h2 className="font-black text-2xl">BISTRO BOSS</h2>
                    <h4 className="font-bold text-base">Restaurant</h4>
                </div>
                <ul className="menu uppercase font-medium text-base space-y-2">
                    
                    <li>
                        <NavLink to="/dashboard/user-home">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                        <FaCalendarAlt />
                            reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment-history">
                            <FaWallet></FaWallet>
                            payment history</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/user-cart">
                            <FaCartPlus></FaCartPlus>
                            my cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add-review">
                            <MdRateReview></MdRateReview>
                            add review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/user-booking">
                        <BsFillCalendar2CheckFill />
                            my booking</NavLink>
                    </li>

                    <div className="divider divider-accent"></div> 

                    <ul className="menu uppercase font-medium text-base space-y-1">
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">
                                <GiHamburgerMenu></GiHamburgerMenu>
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                <FaBagShopping></FaBagShopping>
                                Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <MdMail></MdMail>
                                Contact</NavLink>
                        </li>
                    </ul>

                </ul>
            </div>

            <div className="bg-[#E8E8E8] flex-1 ">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;