import { ImCoinDollar } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const AdminHome = () => {

    const user = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: states ,isLoading } = useQuery({

        queryKey: ['admin-states'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/admin-states')
            return res.data;
        }
    })

    // console.log(states);


    if(isLoading){
        return <span className="loading loading-bars loading-lg mx-auto flex mt-20"></span>
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold">Hi, Welcome Back! {user?.displayName ? user?.displayName : 'Admin'}</h2>

            <div className="mx-auto flex  justify-center mt-16">
                <div className="stats shadow py-2">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <ImCoinDollar className="text-3xl"/>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${states?.revenue}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <PiUsersThreeFill className="text-3xl"/>
                        </div>
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">{states?.user}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <IoFastFoodOutline className="text-3xl"/>
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value">{states?.menuItems}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <TbTruckDelivery className="text-3xl"/>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{states?.orders}</div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AdminHome;