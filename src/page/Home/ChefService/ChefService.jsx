import chefServiceImg from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div style={{backgroundImage : `url(${chefServiceImg})` , backgroundSize: 'cover'}} className="max-w-5xl mx-auto flex justify-center items-center lg:h-80">

            <div className="bg-white text-gray-700 p-10 text-center m-8 w-10/12">
                <h1 className="text-3xl font-light mb-2">Bistro Boss</h1>
                <p className="text-gray-600">Where flavor meets elegance. Indulge in exquisite dishes crafted with passion. Experience culinary artistry and exceptional hospitality in a cozy ambiance. Where flavor meets elegance. Experience culinary artistry and exceptional hospitality in a cozy, inviting ambiance. Your unforgettable dining journey begins here.</p>
            </div>
        </div>
    );
};

export default ChefService;