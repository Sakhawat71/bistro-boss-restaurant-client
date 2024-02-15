import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const ButtonMenu = ({link,text}) => {
    return (

        <Link to={link} className="btn btn-outline border-b-4 hover:bg-white hover:text-black">
            {text}
        </Link>

    );
};

ButtonMenu.propTypes = {
    link : PropTypes.string,
    text : PropTypes.string,
};

export default ButtonMenu;