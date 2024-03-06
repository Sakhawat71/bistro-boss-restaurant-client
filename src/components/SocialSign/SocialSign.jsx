import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialSign = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const axiosPublic = useAxiosPublic()

    const hendelGoogleSign = () => {
        googleSignIn()
            .then(result => {


                const user = result.user;
                const userForDB = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL
                }

                axiosPublic.post("/api/v1/add-user",userForDB)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('new user')
                    }else{
                        console.log('old user')
                    }
                    
                })
                .catch(error => console.log('can`t send user data to DB ', error))

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Wellcome",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="flex justify-center mt-5">
            <span className="flex items-center justify-center font-medium text-xl">Or sign in with
                <FcGoogle
                    onClick={hendelGoogleSign}
                    className="text-3xl ml-2 "
                /></span>
        </div>
    );
};

export default SocialSign;