import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard/FoodCard';

const ShopItems = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
            {
                items?.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

ShopItems.propTypes = {
    items: PropTypes.array,
};

export default ShopItems;