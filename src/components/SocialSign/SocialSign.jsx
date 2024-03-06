import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialSign = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const hendelGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                //console.log(user)
                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Wellcome",
                        showConfirmButton: false,
                        timer: 1000
                    });

                    navigate(from, { replace: true })
                }
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