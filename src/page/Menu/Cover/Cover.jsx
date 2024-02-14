import bannerImg from "../../../assets/menu/banner3.jpg"

const Cover = () => {
    return (
        <div
            style={{backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', backgroundBlendMode: 'multiply'}}

            className="py-40 flex items-center justify-center bg-opacity-65"
        >
            <div className="text-white text-center bg-black bg-opacity-65 space-y-3 py-20 w-4/6 ">
                
                <h1 className="text-4xl font-semibold">OUR MENU</h1>
                <h4 className="uppercase">Would you like to try a dish?</h4>
            
            </div>
        </div>
    );
};

export default Cover;