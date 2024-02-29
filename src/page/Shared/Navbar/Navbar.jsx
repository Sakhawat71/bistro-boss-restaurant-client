import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>

        <li>
            <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
                }
            >Home</NavLink>
        </li>

        <li>
            <NavLink
                to={"/menu"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
                }
            >Our Menu</NavLink>
        </li>

        <li>
            <NavLink
                to={"/shop"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
                }
            >Our Shop</NavLink>
        </li>
        <li>
            <NavLink
                to={"/my-cart"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
                }
            >My Cart</NavLink>
        </li>
        <li>
            <NavLink
                to={"/my-cart"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
                }
            >
                <div className="flex items-center gap-1">
                    <TiShoppingCart className="text-xl"/>
                    <div className="badge">+0</div>
                </div>
            </NavLink>
        </li>

        {
            // user && <>

            //     <li>
            //         <NavLink
            //             to={"/my-cart"}
            //             className={({ isActive, isPending }) =>
            //                 isPending ? "pending" : isActive ? "active text-[#EEFF25] font-bold" : ""
            //             }
            //         >My Cart</NavLink>
            //     </li>

            // </>
        }


    </>


    return (
        <div className="navbar max-w-full fixed z-10 bg-opacity-25 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-base uppercase space-x-4 menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <span className="px-10">{user?.displayName}</span>
                }
                {
                    user ?
                        <button onClick={handelLogout} className="btn btn-outline text-white">Log out</button>
                        :
                        <Link to="/login" className="btn btn-outline text-white">Log In</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;