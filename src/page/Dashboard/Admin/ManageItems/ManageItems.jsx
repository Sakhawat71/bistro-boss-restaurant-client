import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";

const ManageItems = () => {

    const [menu] = useMenu();
    console.log(menu);


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

                console.log(id);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });


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