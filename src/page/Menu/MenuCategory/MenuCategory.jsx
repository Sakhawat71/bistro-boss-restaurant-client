import PropTypes from 'prop-types';
import MenuItem from '../../Home/PopularMenu/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ category, linkRoute }) => {

    console.log(linkRoute,category)

    return (
        <div className='max-w-5xl mx-auto'>
            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 lg:gap-10">
                {
                    category?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='mx-auto mt-10 w-full flex justify-center'>
                <Link to={`/shop`}>
                    <button className="btn btn-outline border-b-4 hover:bg-white hover:text-black">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    category: PropTypes.array,
    linkRoute: PropTypes.string,
};

export default MenuCategory;