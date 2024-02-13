import { NavLink } from "react-router-dom";

const Navbar = () => {


    const navOptions = <>

        <li>
            <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-blue-700 font-bold" : ""
                }
            >Home</NavLink>
        </li>

        <li>
            <NavLink
                to={"/menu"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-blue-700 font-bold" : ""
                }
            >Our Menu</NavLink>
        </li>


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
                <a className="btn btn-outline">Log In</a>
            </div>
        </div>
    );
};

export default Navbar;