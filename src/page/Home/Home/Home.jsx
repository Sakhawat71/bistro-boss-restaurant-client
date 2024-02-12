import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;