import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const UpdateItems = () => {

    const oldItemData = useLoaderData()
    const {name,price,recipe,category} = oldItemData;
    console.log(oldItemData);

    const { register, handleSubmit, } = useForm();
    const onSubmit = async (info) => {
        console.log(info);
        // const imageData = { image: info.image[0] }
        // const res = await axios.post(image_hosting_api, imageData, {
        //     headers: {
        //         "content-type": "multipart/form-data",
        //     }
        // })

        // if (res.data.success) {

        //     const menuItem = {
        //         name: info.name,
        //         category: info.category,
        //         price: parseFloat(info.price),
        //         recipe: info.recipe,
        //         image: res.data.data.display_url
        //     }
        //     // console.log(menuItem);

        //     const menuRes = await axiosSecure.post('/api/v1/add-menu', menuItem)
        //     if (menuRes.data.acknowledged) {
        //         reset()
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Your work has been saved",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
        // }
    };

    return (
        <div>
            <SectionTitle mainTitle={'UPDATE ITEM'} subtitle={'update now'}></SectionTitle>

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
                            defaultValue={name}
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
                                defaultValue={category}
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
                                defaultValue={price}
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
                            defaultValue={recipe}
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
                        Update Item

                    </button>

                </form>
            </div>

        </div>
    );
};

export default UpdateItems;