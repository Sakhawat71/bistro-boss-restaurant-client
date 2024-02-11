import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/01.jpg';
import img2 from '../../../assets/banner/02.jpg';
import img3 from '../../../assets/banner/03.png';
import img4 from '../../../assets/banner/04.jpg';
import img5 from '../../../assets/banner/05.png';
import img6 from '../../../assets/banner/06.png';

const Banner = () => {

    return (
        <Carousel >
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;