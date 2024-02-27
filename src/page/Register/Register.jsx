import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import signImg from "../../assets/sign/authentication2.png"
import signBg from '../../assets/sign/authentication.png'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { registerUserWithEmailPass, updateProfileUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors },

    } = useForm();

    const onSubmit = (info) => {
        // console.log(info)

        registerUserWithEmailPass(info.email, info.password)
            .then(result => {
                const signUser = result.user;

                if (signUser) {
                    updateProfileUser(info.name, info.photo)
                        .then(() => {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Profile update",
                                showConfirmButton: false,
                                timer: 1000
                            });
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }

                // console.log(signUser)
                navigate('/')
            })
            .catch((error) => {
                console.log(" sign up error : ", error)
            })

    }


    const [showPassword, setShowPassword,] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <Helmet>
                <title>
                    Bistro | Sign Up
                </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${signBg})` }}>

                <div className="hero-content flex-col lg:flex-row  items-center justify-center shadow-2xl">

                    <div className="text-center lg:w-1/2 ">

                        <figure className="w-full">
                            <img
                                src={signImg}
                                alt="Sign up cover image"
                                className=" w-full h-full"
                            />
                        </figure>

                    </div>


                    <div className="card w-full lg:w-1/2 max-w-sm bg-base-100 " style={{ backgroundImage: `url(${signBg})` }}>

                        <h1 className="text-center font-bold text-3xl">Sign Up</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Name</span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register('name', { required: true })}
                                />
                                {errors.name && <span className="text-red-600">Name  is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Photo</span>
                                </label>

                                <input
                                    type="text"
                                    // type="file"
                                    name="photo"
                                    placeholder="Photo"
                                    className="input input-bordered"
                                    {...register('photo',)}
                                />
                                {/* {errors.photo && <span className="text-red-600">Photo is required</span>} */}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Email</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-red-600"> Email is required</span>}
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Password</span>
                                </label>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/
                                    })}
                                />
                                <span onClick={handleTogglePassword} className="absolute bottom-4 right-4 text-xl">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye ></FaEye>
                                    }
                                </span>

                            </div>

                            {errors.password?.type === "required" && <span className="text-red-600 ">Password is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-600 ">Password must be 6 and 20 characters</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-600 ">Password must less then 20 characters</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600 ">Password must contain at least one uppercase letter, lowercase letter and one number</span>}

                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn text-white bg-[#D1A054] hover:bg-[#D1A054]"
                                ></input>
                            </div>
                        </form>

                        <div className="mx-auto ">
                            <span
                                className="text-[#D1A054] text-lg"
                            >Already registered? <Link
                                to="/login"
                                className="font-bold"
                            >Go to log in</Link>
                            </span>
                        </div>
                        <div className="flex justify-center mt-5">
                            <span className="flex items-center justify-center font-medium text-xl">Or sign in with
                                <FcGoogle className="text-3xl ml-2 "
                                /></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;