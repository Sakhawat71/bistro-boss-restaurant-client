import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/v1/all-user")
            return res.data;
        }
    })

    const handelMakeAdmin = id => {
        
        console.log("make admin : ", id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('ok')

            }
        });
    }

    const handelDeleteUser = id => {


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

                axiosSecure.delete(`/api/v1/delete-user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .catch(er => console.log(er))

            }
        });



    }


    return (
        <div className="font-sans">
            <SectionTitle
                subtitle={"How many??"}
                mainTitle={"MANAGE ALL USERS"}
            ></SectionTitle>


            <div className="overflow-x-auto bg-white p-10 ">

                <h2 className="font-bold text-2xl uppercase pb-5">Total users: {users.length}</h2>

                <table className="table">

                    {/* head */}
                    <thead className="bg-[#D1A054]">
                        <tr className="uppercase text-base text-white font-semibold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>


                    <tbody>
                        {/* row */}
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className="hover font-medium text-base">

                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        onClick={() => handelMakeAdmin(user._id)}
                                        className="btn btn-sm bg-[#D1A054] text-white">
                                        {
                                            user?.role === 'admin' ?
                                                <GrUserAdmin />
                                                :
                                                <FaUser />
                                        }
                                    </button>
                                </td>
                                <td>

                                    <button
                                        className="btn btn-sm btn-circle bg-red-700"
                                        onClick={() => handelDeleteUser(user._id)}
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

export default AllUsers;