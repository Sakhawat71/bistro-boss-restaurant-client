import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import MenuCover from "../MenuCover/MenuCover";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"

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
                title="DESSERTS"
                text="Explore our mouthwatering selection of desserts, ranging from rich chocolates to fluffy pastries. Indulge in sweet delights crafted with passion and precision, a heavenly experience awaits on our delightful website."
            ></MenuCover>

            <MenuCover
                bgImg={pizzaBg}
                title="PIZZA"
                text="Pizza, a beloved dish worldwide, boasts a delightful combination of savory toppings atop a crispy crust. Whether classic Margherita or loaded with toppings, it remains a universal comfort food favorite."
            ></MenuCover>

        </div>
    );
};

export default MenuLayout;