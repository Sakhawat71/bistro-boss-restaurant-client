import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";

const UpdateItems = () => {

    console.log('update route');
    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <SectionTitle mainTitle={'UPDATE ITEM'} subtitle={'update now'}></SectionTitle>

        </div>
    );
};

export default UpdateItems;