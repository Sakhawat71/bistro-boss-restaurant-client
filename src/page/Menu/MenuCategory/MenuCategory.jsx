import PropTypes from 'prop-types';
import MenuItem from '../../Home/PopularMenu/MenuItem';
import ButtonMenu from '../../../components/Button/ButtonMenu';

const MenuCategory = ({ category }) => {


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
            <div className='mx-auto mt-10 w-1/4'>
                <ButtonMenu link={"/order"}></ButtonMenu>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    category: PropTypes.array,
};

export default MenuCategory;