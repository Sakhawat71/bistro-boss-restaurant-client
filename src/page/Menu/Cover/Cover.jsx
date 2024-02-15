import PropTypes from 'prop-types';

const Cover = ({bgImage,titel,text}) => {
    return (
        <div
            style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', backgroundBlendMode: 'multiply'}}

            className="py-40 bg-fixed flex items-center justify-center bg-opacity-65"
        >
            <div className="text-white text-center bg-black bg-opacity-65 space-y-3 py-20 w-4/6 ">
                
                <h1 className="text-4xl font-semibold">{titel}</h1>
                <h4 className="uppercase">{text}</h4>
            
            </div>
        </div>
    );
};


Cover.propTypes = {
    bgImage : PropTypes.string,
    titel : PropTypes.string,
    text : PropTypes.string,
};

export default Cover;