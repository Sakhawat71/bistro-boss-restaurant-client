import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const MenuCover = (bgImg) => {
    return (
        <Parallax
        bgImage={bgImg}
        >

        </Parallax>
    );
};

MenuCover.propTypes = {
    bgImg : PropTypes.string,
};

export default MenuCover;