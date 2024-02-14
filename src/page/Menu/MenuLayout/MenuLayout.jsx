import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import MenuCover from "../MenuCover/MenuCover";

const MenuLayout = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover></Cover>

            <SectionTitle
            subtitle={"Don't miss"}
            mainTitle={"TODAY'S OFFER"}
            ></SectionTitle>
            
            <MenuCover
            bgImg={dessertBg}
            ></MenuCover>

        </div>
    );
};

export default MenuLayout;