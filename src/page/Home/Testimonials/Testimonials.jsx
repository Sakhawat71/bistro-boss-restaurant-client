import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('reviews.json')
            .then(res => {
                setReviews(res.data)
            })
    }, [])

    return (
        <section className="max-w-5xl mx-auto">
            <div className="mb-10">
                <SectionTitle
                    subtitle={'What Our Clients Say'}
                    mainTitle={'TESTIMONIALS'}
                ></SectionTitle>
            </div>

            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;