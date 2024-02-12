import PropTypes from 'prop-types';

const SectionTitle = ({ subtitle, mainTitle }) => {
    return (
        <div className="text-center w-3/4 md:w-1/2 mx-auto lg:space-y-4 ">

            <h2
                className="text-[#D99904] border-b-4 pb-3 italic md:text-xl lg:text-2xl mb-4"
            >---{subtitle}---</h2>

            <h1
                className="text-2xl md:text-3xl lg:text-5xl font-medium border-b-4 pb-5"
            >{mainTitle}</h1>

        </div>
    );
};

SectionTitle.propTypes = {
    subtitle: PropTypes.string,
    mainTitle: PropTypes.string,
};

export default SectionTitle;