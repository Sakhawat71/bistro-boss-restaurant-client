import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const MenuCover = ({bgImg, title, text}) => {
    return (
        <Parallax
            bgImage={bgImg}
            blur={2}
            className='py-16 md:py-20 lg:py-32 my-20 bg-cover'
            bgImageAlt='menu section cover'
            strength={-400}
            
        >
            <div className="bg-black bg-opacity-65 menu-cover-content text-white md:py-20 py-5 px-5 md:px-20 text-center mx-auto w-5/6 md:w-4/6">
                <h2 className='text-3xl font-bold mb-2 uppercase'>{title}</h2>
                <p>{text}</p>
            </div>
        </Parallax>
    );
};

MenuCover.propTypes = {
    bgImg: PropTypes.string,
    title : PropTypes.string,
    text : PropTypes.string,
};

export default MenuCover;