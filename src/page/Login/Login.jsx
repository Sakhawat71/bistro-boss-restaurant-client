import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signCover from '../../assets/sign/authentication2.png';
import signBg from '../../assets/sign/authentication.png';
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { loginUserWithEmailPass, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const captchaRaf = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()

    const onSubmit = info => {
        console.log(info)
        loginUserWithEmailPass(info.email, info.password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {

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



    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handelValidateCaptcha = e => {

        e.preventDefault()
        const user_captcha_value = captchaRaf.current.value;
        // ;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }

    const hendelGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Wellcome back my NIgga",
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
    // console.log("auth info : ", auth)

    return (
        <>
            <Helmet>
                <title>
                    Bistro | Log in
                </title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url(${signBg})` }}>

                <div className="hero-content flex-col lg:flex-row  shadow-2xl my-10">

                    <div className="text-center lg:w-1/2 ">
                        <figure>
                            <img
                                src={signCover}
                                alt="Log in cover image"
                                className="w-full h-full"
                            />
                        </figure>
                    </div>


                    <div className="card w-full lg:w-1/2 max-w-sm  bg-base-100 " style={{ backgroundImage: `url(${signBg})` }}>


                        <h1 className="text-3xl font-bold text-center">Login</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0 pb-5">


                            {/* ----- Email Input -------- */}
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

                            {/* ------ Password Input ------  */}
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

                            {/* --------------- Captcha ------------------------- */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">
                                        <LoadCanvasTemplate></LoadCanvasTemplate>
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="canvas"
                                    placeholder="type the text above"
                                    className="input input-bordered"
                                    required
                                    ref={captchaRaf}
                                />
                                <label className="label">
                                    <button
                                        onClick={handelValidateCaptcha}
                                        className="btn mx-auto btn-outline btn-xs">
                                        Validate
                                    </button>
                                </label>
                            </div>

                            <div className="form-control">
                                <input
                                    disabled={disabled}
                                    type="submit"
                                    value="Login"
                                    className="btn text-white bg-[#D1A054B2] hover:bg-[#D1A054B2]"
                                ></input>
                            </div>
                        </form>

                        <div className="mx-auto ">
                            <span
                                className="text-[#D1A054] text-base"
                            >New here? <Link
                                to="/register"
                                className="font-bold"
                            >Create a New Account</Link> </span>
                        </div>
                        <div className="flex justify-center mt-5">
                            <span className="flex items-center justify-center font-medium text-xl">Or sign in with
                                <FcGoogle 
                                onClick={hendelGoogleSign}
                                className="text-3xl ml-2 "
                                /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;