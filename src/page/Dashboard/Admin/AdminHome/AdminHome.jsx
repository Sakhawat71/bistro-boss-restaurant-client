
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminHome = () => {

    const user = useAuth()
    const axiosSecure = useAxiosSecure();

    const {data : states } = useQuery({
        queryKey: ['admin-states', user?.email],
        // enabled : ,
        queryFn : () => {
            const res = axiosSecure.get('/api/v1/admin-states')
            return res;
        }
    })

    console.log(states?.data);

    return (
        <div>
            <h2 className="text-2xl font-semibold">Hi, Welcome Back! {user?.displayName ? user?.displayName : 'Admin'}</h2>
            
        </div>
    );
};

export default AdminHome;