import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Slider.css"

import img1 from "../../../assets/slider/slide1.jpg"
import img2 from "../../../assets/slider/slide2.jpg"
import img3 from "../../../assets/slider/slide3.jpg"
import img4 from "../../../assets/slider/slide4.jpg"
import img5 from "../../../assets/slider/slide5.jpg"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"



const Slider = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 4,
            spacing: 15,
        },
    })

    return (
        <div className="my-20">
            
            <SectionTitle
            subtitle={'From 11:00am to 10:00pm'}
            mainTitle={'ORDER ONLINE'}
            ></SectionTitle>

            <div ref={sliderRef} className="keen-slider max-w-5xl my-10 max-h-[150px] md:max-h-fit mx-auto">

                <div className="keen-slider__slide number-slide1 flex-col relative rounded-xl">
                    <img className="h-full w-full" src={img1} alt="slide" />
                    <legend className="text-2xl absolute bottom-8 text-red-500 uppercase">Salads</legend>
                </div>

                <div className="keen-slider__slide number-slide2 relative rounded-xl ">
                    <img className="h-full w-full" src={img2} alt="slide" />
                    <legend className="text-2xl absolute bottom-8 text-white shadow-lg uppercase">pizzas</legend>
                </div>

                <div className="keen-slider__slide number-slide3 relative rounded-xl">
                    <img className="h-full w-full" src={img3} alt="slide" />
                    <legend className="text-2xl absolute bottom-8 text-red-500 shadow-lg uppercase">Soups</legend>
                </div>

                <div className="keen-slider__slide number-slide4 relative rounded-xl">
                    <img className="h-full w-full" src={img4} alt="slide" />
                    <legend className="text-2xl absolute bottom-8 text-red-500 shadow-lg uppercase">desserts</legend>
                </div>

                <div className="keen-slider__slide number-slide5 relative rounded-xl">
                    <img className="h-full w-full" src={img5} alt="slide" />
                    <legend className="text-2xl absolute bottom-8 text-red-500 shadow-lg uppercase">Salads</legend>
                </div>

            </div>
        </div>
    );
};

export default Slider;