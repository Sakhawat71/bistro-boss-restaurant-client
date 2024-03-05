import cupCake from "../../../assets/dashboard/cupcake.gif"

const LandingDash = () => {
    return (
        <div className="bg-white min-h-screen font-mono ">
            <figure className="">
                <img
                    className="mx-auto"
                    src={cupCake}
                    alt="dashboard img" />
            </figure>
            <h1 className="font-bold text-5xl text-center py-2">Welcome to Bistro Boss <br/> Restaurant</h1>
        </div>
    );
};

export default LandingDash;
