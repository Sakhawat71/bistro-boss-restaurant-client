import { Helmet } from "react-helmet-async";
import CallUs from "../../../components/CallUs/CallUs";
import Banner from "../Banner/Banner";
import ChefReco from "../ChefReco/ChefReco";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefReco></ChefReco>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;