import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(items => items.category === "popular");

    return (
        <section className="my-10 mx-5 md:mx-20 max-w-5xl lg:mx-auto">
            <SectionTitle
                subtitle={'Check it out'}
                mainTitle={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="mx-auto my-10 justify-center flex">
                <Link to={"/menu"} className="btn btn-outline mx-auto">View Full  Menu</Link>
            </div>
        </section>
    );
};


export default PopularMenu;