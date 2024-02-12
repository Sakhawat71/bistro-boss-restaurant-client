import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;


    return (
        <div className='flex grid-cols-7 justify-center space-x-2'>

            <figure className='flex items-center justify-center mr-2'>
                <img
                    className='rounded-e-full rounded-b-full md:h-full w-36'
                    src={image}
                    alt="image" />
            </figure>

            <div className=' '>
                <h3 className='uppercase text-xl'>{name} -----------</h3>
                <p className='text-gray-600'>{recipe}</p>
            </div>

            <div className=' '>
                <p className='text-yellow-600'>${price}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object,
};

export default MenuItem;