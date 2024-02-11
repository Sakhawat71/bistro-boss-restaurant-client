import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Slider.css"

import img1 from "../../../assets/slider/slide1.jpg"
import img2 from "../../../assets/slider/slide2.jpg"
import img3 from "../../../assets/slider/slide3.jpg"
import img4 from "../../../assets/slider/slide4.jpg"
import img5 from "../../../assets/slider/slide5.jpg"



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
        <div ref={sliderRef} className="keen-slider max-w-5xl mx-auto my-10 max-h-[150px] md:max-h-fit">
            
            <div className="keen-slider__slide number-slide1 flex-col relative rounded-xl">
                <img className="h-full w-full" src={img1} alt="slide" />
                <legend className="bg-none absolute bottom-0 text-red-500">Hello</legend>
            </div>

            <div className="keen-slider__slide number-slide2">
                <img src={img2} alt="slide" />
            </div>

            <div className="keen-slider__slide number-slide3">
                <img src={img3} alt="slide" />
            </div>

            <div className="keen-slider__slide number-slide4">
                <img src={img4} alt="slide" />
            </div>

            <div className="keen-slider__slide number-slide5">
                <img src={img5} alt="slide" />
            </div>
            
        </div>
    );
};

export default Slider;