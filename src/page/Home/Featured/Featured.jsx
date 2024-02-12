import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/featured/featured.jpg";

const Featured = () => {
    return (
        <div
            style={{ backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(0, 0, 0, 0.7)', opacity: '0.9', backgroundBlendMode: 'multiply' }}

            className="py-10 md:py-20 my-20 px-5 md:px-10 lg:px-40 bg-fixed">

            <div className="text-white">
                <SectionTitle
                    subtitle={"Check it out"}
                    mainTitle={"FROM OUR MENU"}
                ></SectionTitle>
            </div>

            <div className="md:flex space-y-5 text-white gap-10 justify-center items-center my-10 text-center md:text-start">
                <figure >
                    <img className="w-full" src={featuredImg} alt="featured Image" />
                </figure>

                <div className="space-y-2">
                    <h4>March 20, 2023</h4>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white ">READ MORE</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;