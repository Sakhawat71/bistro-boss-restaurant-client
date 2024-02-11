import { Link } from "react-router-dom";

const Navbar = () => {


    const navOptions = <>

        <li>
            <Link>Home</Link>
        </li>

        <li>
            <Link>Shop</Link>
        </li>

        <li>
            <Link>Home</Link>
        </li>

    </>


    return (
        // <div className="mx-auto">
            <div className="navbar max-w-7xl fixed z-10 bg-opacity-25 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Log In</a>
            </div>
        </div>
        // </div>
    );
};

export default Navbar;