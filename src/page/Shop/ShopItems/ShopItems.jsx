import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard/FoodCard';

// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import './ShopItems.css'
// import { Pagination } from 'swiper/modules';


const ShopItems = ({ items }) => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };

    return (
        // <div >
        //     <Swiper
        //         pagination={pagination}
        //         modules={[Pagination]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
            {
                items?.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
        //         </SwiperSlide>

        //     </Swiper>
        // </div>
    );
};

ShopItems.propTypes = {
    items: PropTypes.array,
};

export default ShopItems;