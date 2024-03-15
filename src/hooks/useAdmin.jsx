import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    
    const user = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin} = useQuery({
        queryKey: [user?.email ,'isAdmin'],
        queryFn : async () => {
            const res = await axiosSecure.get(`/api/v1/admin/${user.email}`)
            return res.data.admin;
        }
    })

    return [isAdmin];

};

export default useAdmin;