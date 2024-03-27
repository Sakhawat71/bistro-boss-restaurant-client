import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {

    const user = useAuth();
    const { loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    console.log('auth loading in admin ', loading);

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/admin/${user.email}`)
            
            console.log('res.data in admin: ', res.data);
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading];

};

export default useAdmin;