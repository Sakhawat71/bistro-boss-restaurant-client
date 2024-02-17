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

            <ShopItems items={popular}></ShopItems>
        </div>
    );
};

export default ChefReco;