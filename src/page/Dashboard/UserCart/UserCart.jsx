import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const UserCart = () => {

    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart();
    refetch()
    const totalPrice = cart.reduce((acc, item) => { return acc + item.price }, 0);



    const handelDelete = id => {

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
                // console.log('try to delete: ---> ', id)

                axiosSecure.delete(`/api/v1/delete-cart-item/${id}`)
                    .then(result => {
                        // console.log(result)
                        if (result.data.deletedCount === 1) {
                            refetch();
                            // Swal.fire({
                            //     title: "Deleted!",
                            //     text: "Your Product has been deleted.",
                            //     icon: "success"
                            // })
                            
                        }
                    })
                    .catch(error => {
                        // Handle any errors that might occur during the delete request
                        console.error('Error deleting cart item:', error);
                    });
            }
        });

    }


    return (
        <div className="text-xl">
            <SectionTitle mainTitle={'WANNA ADD MORE?'} subtitle={'My Cart'}></SectionTitle>


            <div className="overflow-x-auto bg-white py-10 px-10">

                <div className="flex justify-between items-center uppercase font-bold text-2xl pb-5">
                    <h2>Total orders: {cart.length} </h2>
                    <h2>total price: ${totalPrice} </h2>
                    {
                        cart.length ? <Link to="/dashboard/payment" className="btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white">PAY</Link> :
                        <button disabled className="btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:bg-white">PAY</button>
                    }
                </div>

                <table className="table">

                    <thead className="bg-[#D1A054] text-white font-semibold text-base font-sans ">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            cart?.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar items" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item?.name}</div>

                                        </div>
                                    </td>
                                    <td>
                                        <h3>${item?.price}</h3>
                                    </td>

                                    <th>
                                        <button onClick={() => handelDelete(item._id)} className="btn btn-sm bg-[#B91C1C] text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default UserCart;

<tr>
    <th>
        #
    </th>
    <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src="" alt="Avatar items" />
                </div>
            </div>

        </div>
    </td>
    <td>
        <div>
            <div className="font-bold">Hart Hagerty</div>

        </div>
    </td>
    <td>
        <h3>$10.58</h3>
    </td>

    <th>
        <button className="btn  btn-xs bg-[#B91C1C] text-white">Remove</button>
    </th>
</tr>