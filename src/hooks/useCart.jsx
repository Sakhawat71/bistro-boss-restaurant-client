import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const user = useAuth();

    const { data: cart = [],refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/get-carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart,refetch];

};

export default useCart;