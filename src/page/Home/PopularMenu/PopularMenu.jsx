import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('menu.json')
            .then(res => {

                const popularItems = res.data.filter(item => item.category === "popular")
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className="my-10 mx-5 md:mx-20 max-w-5xl lg:mx-auto">
            <SectionTitle
                subtitle={'Check it out'}
                mainTitle={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="mx-auto my-10 justify-center flex">
                <Link className="btn btn-outline mx-auto">View Full  Menu</Link>
            </div>
        </section>
    );
};


export default PopularMenu;