import { FaBook, FaCalendarAlt, FaCartPlus, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { MdMail, MdRateReview } from "react-icons/md";
import { FaBagShopping,  } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="mx-auto max-w-7xl flex gap-10">

            <div className="w-64 min-h-screen uppercase bg-[#D1A054]">

                <div className="text-center pt-8 pb-5">
                    <h2 className="font-black text-2xl">BISTRO BOSS</h2>
                    <h4 className="font-bold text-base">Restaurant</h4>
                </div>
                <ul className="menu uppercase font-medium text-base space-y-2">

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/user-home">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add-items">
                                        <ImSpoonKnife />
                                        add items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-items">
                                        <TfiMenuAlt />
                                        manage items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-bookings">
                                        <FaBook />
                                        Manage bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-users">
                                        <FaUsers />
                                        all users</NavLink>
                                </li>

                            </>
                            :
                            <>
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
                            </>
                    }

                    <div className="divider divider-accent"></div>

                    <div className="menu uppercase font-medium text-base space-y-1">
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
                    </div>

                </ul>
            </div>

            <div className="bg-[#F6F6F6] flex-1 ">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;