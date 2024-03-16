import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_Image_hosting_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = async (info) => {

        const imageData = { image: info.image[0] }
        const res = await axios.post(image_hosting_api, imageData, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })

        if (res.data.success) {

            const menuItem = {
                name: info.name,
                category: info.category,
                price: parseFloat(info.price),
                recipe: info.recipe,
                image: res.data.data.display_url
            }
            // console.log(menuItem);

            const menuRes = await axiosSecure.post('/api/v1/add-menu', menuItem)
            if (menuRes.data.acknowledged) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };


    return (
        <div className="border h-full bg-white">
            <SectionTitle
                subtitle={'What`s new?'}
                mainTitle={'ADD AN ITEM'}
            ></SectionTitle>

            <div className=" px-10">

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-[#F3F3F3] p-10 rounded-lg" >


                    {/* ****** Recipe name ****** */}
                    <label className="space-y-3">

                        <div className="label">
                            <span className="label-text text-xl font-semibold">Recipe name*</span>
                        </div>
                        <input
                            className="input input-bordered w-full "
                            {...register("name")}
                            required
                        />
                    </label>

                    <div className="flex items-center gap-10 mt-4">

                        {/* ***** category ***** */}
                        <label className="space-y-3 w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Category*</span>
                            </div>
                            <select
                                {...register("category")}
                                className="select w-full"
                                required
                                defaultValue={"disabled"}
                            >

                                <option disabled selected value="disabled">Category</option>
                                <option value="salad">Salad</option>
                                <option value="pissa">Pissa</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">Dessert</option>

                            </select>
                        </label>

                        {/* ********  price ******* */}

                        <label className="form-control space-y-3  w-1/2 ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Price*</span>
                            </div>
                            <input
                                {...register("price")}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>

                    {/* ************ Recipe Details ************* */}
                    <label className="form-control space-y-3 mt-2 w-full ">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Recipe Details*</span>
                        </div>

                        <textarea
                            {...register('recipe')}
                            placeholder="Recipe Details"
                            className="textarea textarea-bordered textarea-lg w-full"
                            required
                        ></textarea>
                    </label>

                    {/* ******* image ****** */}
                    <div className="my-8 form-control">
                        <input
                            {...register("image")}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs "
                            required
                        />
                    </div>

                    <button
                        className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white font-bold text-xl"
                        type="submit"
                    >
                        Add Item
                        <ImSpoonKnife></ImSpoonKnife>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddItems;