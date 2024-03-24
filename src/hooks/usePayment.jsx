import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {

    const user = useAuth()
    const axiosSecure = useAxiosSecure();
    
    const {data: payment,refetch} = useQuery({
        queryKey : ['payment', user.email],
        queryFn :async () => {
            const res = await axiosSecure.get(`/api/v1/payments/${user?.email}`)
            return res.data;
        }
    })

    return [payment,refetch];
};

export default usePayment;