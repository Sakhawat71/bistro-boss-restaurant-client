import { FaFacebookF ,FaInstagram , FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#2B3440]">
            <footer className="footer grid md:grid-cols-2 mx-auto  bg-neutral text-neutral-content">

                <nav className="mx-auto w-full py-10 bg-[#1F2937] flex flex-col justify-center items-center">
                    <h6 className="footer-title">CONTACT US</h6>
                    <a className="link link-hover">123 ABS Street, Uni 21, Bangladesh</a>
                    <a className="link link-hover">+88 123456789</a>
                    <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
                    <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
                </nav>

                <nav className="mx-auto w-full py-10 justify-center flex items-center flex-col">
                    <h6 className="footer-title ">Follow US</h6>
                    <p className="link-hover">Join us on social media</p>
                    <div className="flex space-x-4 text-xl">
                        <a className="link link-hover">
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a className="link link-hover">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a className="link link-hover">
                            <FaTwitter></FaTwitter>
                        </a>
                    </div>
                </nav>

            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Bistro Boss Restaurant.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;