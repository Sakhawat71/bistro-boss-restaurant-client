
const Footer = () => {
    return (
        <div className="bg-[#2B3440]">
            <footer className="footer grid md:grid-cols-2 mx-auto  bg-neutral text-neutral-content">

                <nav className="mx-auto w-full py-10 bg-[#1F2937] justify-center">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav className="mx-auto w-full py-10 justify-center">
                    <h6 className="footer-title ">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;