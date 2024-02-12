import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import ChefReco from "../ChefReco/ChefReco";
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
            <CallUs></CallUs>
            <ChefReco></ChefReco>
        </div>
    );
};

export default Home;