import PropTypes from 'prop-types';
import ButtonMenu from '../Button/ButtonMenu';

const FoodCard = ({ item }) => {
    // console.log(item)
    const { image, name, recipe, price } = item;

    return (
        <div className="card bg-base-100 relative shadow-xl">
            <figure className="">
                <img src={image} alt="img" className="rounded-lg" />
            </figure>
            <p className='absolute py-2 px-4 rounded-xl right-4 top-4 text-white bg-gray-800'>${price}</p>
            <div className="card-body items-center text-center bg-[#F3F3F3] pb-4">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{recipe}</p>

                <ButtonMenu text={"Add to Cart"}></ButtonMenu>

            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object,
};

export default FoodCard;