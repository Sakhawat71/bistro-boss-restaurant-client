import Cover from "../Menu/Cover/Cover";
import coverBg from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";

const Shop = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu([]);

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div className="mb-10 bg-white">
            <Cover
                bgImage={coverBg}
                titel={"OUR SHOP"}
                text={"Would you like to try a dish?"}
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="max-w-5xl mx-auto my-10 py-10">

                <TabList className="flex justify-center tabs md:space-x-3 uppercase font-bold text-xl mb-16">

                    <Tab className="tab border-b-4 focus:text-[#BB8506] focus:border-[#BB8506]">Salad</Tab>
                    <Tab className="tab border-b-4 focus:text-[#BB8506] focus:border-[#BB8506]">pizza</Tab>
                    <Tab className="tab border-b-4 focus:text-[#BB8506] focus:border-[#BB8506]">soups</Tab>
                    <Tab className="tab border-b-4 focus:text-[#BB8506] focus:border-[#BB8506]">desserts</Tab>
                    <Tab className="tab border-b-4 focus:text-[#BB8506] focus:border-[#BB8506]">drinks</Tab>
                </TabList>

                {/* --------- salad ------------ */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>


                {/* ----------------- pizza ---------------- */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
                        {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>

                {/* ----------------- soup ---------------- */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
                        {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>


                {/* ----------------- dessert ---------------- */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
                        {
                            dessert.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>


                {/* ----------------- drinks ---------------- */}
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 mx-5 md:mx-10 lg:mx-auto">
                        {
                            drinks.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Shop;