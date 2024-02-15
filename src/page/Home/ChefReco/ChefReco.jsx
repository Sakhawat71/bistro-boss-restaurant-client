import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ShopItems from "../../Shop/ShopItems/ShopItems";

const ChefReco = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")

    return (
        <div className="max-w-5xl my-20 mx-5 md:mx-10 lg:mx-auto ">
            <div className="mb-10">
                <SectionTitle
                    subtitle={"Should Try"}
                    mainTitle={"CHEF RECOMMENDS"}
                ></SectionTitle>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={img} alt="img" className="rounded-lg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={img} alt="img" className="rounded-lg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={img} alt="img" className="rounded-lg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        
                    </div>
                </div>


            </div> */}
            <ShopItems items={popular}></ShopItems>
        </div>
    );
};

export default ChefReco;