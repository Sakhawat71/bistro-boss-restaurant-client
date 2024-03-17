import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Watch } from "react-loader-spinner";

const ManageItems = () => {

    const [menu, refetch, isLoading] = useMenu();
    const axiosSecure = useAxiosSecure();
    // console.log(menu);

    if (isLoading) {
        return <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    }

    const handelUpdateItem = id => {
        console.log(id);
    }

    const handelDeleteItem = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/api/v1/delete-menu/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 500
                              });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle subtitle="Hurry Up!" mainTitle={'MANAGE ALL ITEMS'} />

            <div className="overflow-x-auto bg-white p-10 ">

                <h2 className="font-bold text-2xl uppercase pb-5">Total users: {menu.length}</h2>

                <table className="table">

                    {/* head */}
                    <thead className="bg-[#D1A054]">
                        <tr className="uppercase text-base text-white font-semibold">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>


                    <tbody>
                        {/* row */}
                        {
                            menu.map((item, i) => <tr
                                key={item._id}
                                className="hover font-medium text-base">

                                <th>{i + 1}</th>

                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded-xl">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>

                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button
                                        onClick={() => handelUpdateItem(item._id)}
                                        className="btn btn-sm bg-[#D1A054] text-white">
                                        <FaRegEdit></FaRegEdit>
                                    </button>
                                </td>
                                <td>

                                    <button
                                        className="btn btn-sm btn-circle bg-red-700"
                                        onClick={() => handelDeleteItem(item._id)}
                                    >
                                        <FaTrashAlt className=" text-white text-lg my-1" />
                                    </button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;