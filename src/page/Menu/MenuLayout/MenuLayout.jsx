import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import MenuCover from "../MenuCover/MenuCover";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import supeBg from "../../../assets/menu//soup-bg.jpg";
import bannerImg from "../../../assets/menu/banner3.jpg";

const MenuLayout = () => {

    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div className="bg-white mb-20">
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover
                bgImage={bannerImg}
                titel={'OUR MENU'}
                text={'Would you like to try a dish?'}
            ></Cover>

            <SectionTitle
                subtitle={"Don't miss"}
                mainTitle={"TODAY'S OFFER"}
            ></SectionTitle>

            <MenuCategory category={offered} ></MenuCategory>


            {/* ----------- Dessert ----------- */}
            <MenuCover
                bgImg={dessertBg}
                title="DESSERTS"
                text="Explore our mouthwatering selection of desserts, ranging from rich chocolates to fluffy pastries. Indulge in sweet delights crafted with passion and precision, a heavenly experience awaits on our delightful website."
            ></MenuCover>

            <MenuCategory category={dessert}></MenuCategory>


            {/* ------------ pizza ------------- */}
            <MenuCover
                bgImg={pizzaBg}
                title="PIZZA"
                text="Pizza, a beloved dish worldwide, boasts a delightful combination of savory toppings atop a crispy crust. Whether classic Margherita or loaded with toppings, it remains a universal comfort food favorite."
            ></MenuCover>
            <MenuCategory category={pizza}></MenuCategory>


            {/* ------------ Salad----------- */}
            <MenuCover
                bgImg={saladBg}
                title={"SALADS"}
                text={"Discover our vibrant salads, bursting with freshness and flavor. From crisp greens to zesty dressings, our salads offer a delightful medley of textures and ingredients, perfect for health-conscious diners."}
            ></MenuCover>
            <MenuCategory category={salad}></MenuCategory>


            {/* ------------ soup ------------ */}
            <MenuCover
                bgImg={supeBg}
                title={"SOUPS"}
                text={"Savor our soul-warming soups, crafted with care and bursting with flavor. From hearty stews to creamy bisques, our soup selection offers comfort and nourishment in every spoonful, perfect for any occasion."}
            ></MenuCover>
            <MenuCategory category={soup}></MenuCategory>

        </div>
    );
};

export default MenuLayout;