import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ButtonMenu = ({text}) => {
    return (

        <Link  className="btn btn-outline border-b-4 hover:bg-white hover:text-black">
            <button>{text}</button>
        </Link>

    );
};

ButtonMenu.propTypes = {
    // category : PropTypes.string,
    text : PropTypes.string,
};

export default ButtonMenu;