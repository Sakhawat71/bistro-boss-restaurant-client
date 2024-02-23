import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/reviews')
            .then(res => {
                setReviews(res.data)
            })
    }, [])


    return (
        <section className="max-w-5xl mx-auto my-20">

            <div className="mb-10">
                <SectionTitle
                    subtitle={'What Our Clients Say'}
                    mainTitle={'TESTIMONIALS'}
                ></SectionTitle>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className="px-20"
                    >
                        <div className="space-y-5 ">

                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <FaQuoteLeft className="text-7xl mx-auto"></FaQuoteLeft>
                            <p>{review.details}</p>
                            <h2 className="text-yellow-600 text-3xl uppercase font-extralight ">{review.name}</h2>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;