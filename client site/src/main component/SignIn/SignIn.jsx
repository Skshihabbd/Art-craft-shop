/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Custom from "../../sharedcomponent/custom/Custom";
import SocialLogin from "../../page component/SocialLogin/SocialLogin";
import PageTitle from "../../sharedcomponent/page-title/PageTitle";
import { IoEye, IoEyeOff } from "react-icons/io5";
const SignIn = () => {
  const { SignIn, users } = Custom();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { shihab } = Custom();
  console.log(shihab);
  console.log(location);
  const [success, setSuccess] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    try {
      setLoading(true);
      SignIn(email, password).then((result) => {
        console.log(result.user);
        setSuccess(toast("login successfull"));
        reset();
        navigate(location?.state ? location.state : "/");
        setLoading(false);
      });
    } catch (errores) {
      console.log(errores.message);
      setError(toast("user Information is wrong"));
    }
  };
  return (
    <div className=" w-full min-h-screen  bg-[url('https://thumbs.dreamstime.com/b/abstract-pastel-colors-dripping-paint-background-artistic-concept-320518103.jpg')] flex justify-center items-center  ">
      <PageTitle title="Login-form" />

      <div className=" md:w-[55%] lg:w-[35%] mx-auto login-form-box-shadow py-3 bg-gray-400 rounded-xl">
        <h1 className="text-center mb-3 open-sans-bold text-xl text-white">
          Login your account
        </h1>
        <hr className="w-8/12 h-[1px] bg-black mx-auto mb-6" />
        <div className=" w-10/12 mx-auto ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label className=" open-sans-bold text-white">Email </label>

              <input
                className="w-full input login-form-box-shadow placeholder:open-sans-regular placeholder:text-black "
                type="email"
                name="email"
                id="emails"
                required
                placeholder="Enter your email address "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="relative">
              <div className="flex justify-between">
                <label className="open-sans-bold text-white">Password</label>
                <button type="button" className="text-black">
                  Forgot Password
                </button>
              </div>

              <input
                className="w-full input login-form-box-shadow placeholder:open-sans-regular placeholder:text-black "
                type={showPassword ? "text" : "password"}
                name="password"
                id="passcode"
                required
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute  right-5 top-10 "
              >
                {showPassword ? (
                  <IoEye className="text-black text-base" />
                ) : (
                  <IoEyeOff className="text-base text-black" />
                )}
              </button>
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              <p>{error}</p>
            </div>

            <button type="submit" className="w-full btn btn-secondary my-3 ">
              {loading ? (
                <img
                  className="animate-spin w-10 "
                  src="asset/image/loading.png"
                />
              ) : (
                "Login"
              )}
            </button>
          </form>

          {users ? (
            <p> {success} </p>
          ) : (
            <p className="text-center open-sans-bold my-3 text-white">
              Don't have an account
              <Link
                to="/signup"
                className="text-gray-700 ml-3 hover:border-b-[2px] border-black"
              >
                Register
              </Link>
            </p>
          )}
        </div>
        <p className="py-2 text-center open-sans-bold text-white">Or</p>
        <div className=" flex justify-center w-10/12 mx-auto">
          <SocialLogin></SocialLogin>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
