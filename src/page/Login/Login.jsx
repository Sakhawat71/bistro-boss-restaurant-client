import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const captchaRaf = useRef(null);
    const [disabled, setDisabled] = useState(true)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handelLogin = e => {

        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        form.reset()
    }

    const handelValidateCaptcha = e => {

        e.preventDefault()
        const user_captcha_value = captchaRaf.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }

    console.log(auth)

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row border">

                <div className="text-center lg:w-1/2 border">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>


                <div className="card w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100 border">

                    <form onSubmit={handelLogin} className="card-body">
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
                            />
                            <span onClick={handleTogglePassword} className="absolute bottom-12 right-4 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye ></FaEye>
                                }
                            </span>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

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

                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" value="Login" className="btn btn-primary"></input>
                        </div>
                    </form>

                    <div className="mx-auto ">
                        <span
                            className="text-[#D1A054]"
                        >New here? <Link
                            to="/register"
                            className="font-bold"
                        >Create a New Account</Link> </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;