import Cover from "../Menu/Cover/Cover";
import coverBg from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import ShopItems from "./ShopItems/ShopItems";
import { Helmet } from "react-helmet";

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

            <Helmet title="Bistro | Shop"></Helmet>

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
                    <ShopItems items={salad}></ShopItems>
                </TabPanel>


                {/* ----------------- pizza ---------------- */}
                <TabPanel>
                    <ShopItems items={pizza}></ShopItems>
                </TabPanel>

                {/* ----------------- soup ---------------- */}
                <TabPanel>
                    <ShopItems items={soup}></ShopItems>
                </TabPanel>


                {/* ----------------- dessert ---------------- */}
                <TabPanel>
                    <ShopItems items={dessert}></ShopItems>
                </TabPanel>


                {/* ----------------- drinks ---------------- */}
                <TabPanel>
                    <ShopItems items={drinks}></ShopItems>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Shop;