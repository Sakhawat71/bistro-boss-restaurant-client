import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";



const Register = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
        
    } = useForm();

    const onSubmit = (info) => {
        console.log(info)
    }

    const [showPassword, setShowPassword,] = useState(false);

    // const handelSignUp = e => {
    //     e.preventDefault();
    // }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row border">

                <div className="text-center lg:w-1/2 border">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>


                <div className="card w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100 border">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                                {...register('name')}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                {...register("email")}
                            />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                {...register("password")}
                            />
                            <span onClick={handleTogglePassword} className="absolute bottom-4 right-4 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye ></FaEye>
                                }
                            </span>

                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary"></input>
                        </div>
                    </form>

                    <div className="mx-auto ">
                        <span
                            className="text-[#D1A054]"
                        >Already registered? <Link
                            to="/login"
                            className="font-bold"
                        >Go to log in</Link> </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;