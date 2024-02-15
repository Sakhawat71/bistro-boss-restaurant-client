import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ButtonMenu = ({link}) => {
    return (

        <Link to={link} className="btn btn-outline border-b-4 hover:bg-white hover:text-black">
            ORDER YOUR FAVOURITE FOOD
        </Link>

    );
};

ButtonMenu.propTypes = {
    link : PropTypes.string
};

export default ButtonMenu;