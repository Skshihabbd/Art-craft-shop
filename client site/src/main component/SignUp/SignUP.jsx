import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Custom from "../../sharedcomponent/custom/Custom";
import PageTitle from "../../sharedcomponent/page-title/PageTitle";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignUp, updateUser } = Custom();
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);

  const loaction = useLocation();
  const navigate = useNavigate();
  console.log(SignUp);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.UserName;
    const image = data.photourl;

    console.log(email, password, name, image);

    try {
      setLoading(true);
      SignUp(email, password).then((result) => {
        console.log(result.user);
        updateUser(name, image).then((result) => {
          console
            .log("userupdated", result.user)
            .catch((error) => console.log("user not updated", error.message));
        });

        if (result.user) {
          navigate(loaction?.state ? location.state : "/");
        }

        reset();
        setLoading(false);
      });
    } catch (errors) {
      console.log(errors.message);
      setError(errors.message);
    }
  };
  return (
    <div className=" w-full h-screen    " >
      <PageTitle title="Register-to see all details" />
      <div className=" w-11/12  mx-auto  flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between my-5  ">
        <div className="md:w-2/4 ">
          <img
            className="w-11/12 rounded-lg aspect-[7/6]"
            src="/asset/image/arts and craft image.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-[40%]  login-form-box-shadow rounded-xl  bg-gray-400 ">
          <h1 className="text-center mb-5  text-xl open-sans-bold text-[var(--text-color)]">
            Register your account
          </h1>
          <hr className="w-10/12 lg:w-9/12 h-[1px]  mx-auto " />
          <div className="w-10/12 lg:w-9/12 mx-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div>
                <label className="open-sans-bold text-[var(--text-color)]">Your Name</label>

                <input
                  className="w-full input login-form-box-shadow placeholder:open-sans-regular placeholder:open-sans-regular"
                  type="text"
                  name="name"
                  id="texts"
                  placeholder="Enter your name"
                  {...register("UserName", { required: true })}
                />
                {errors.UserName && (
                  <span className="text-red-800">This field is required</span>
                )}
              </div>

              <div>
                <label className="open-sans-bold text-[var(--text-color)]">Photo Url </label>

                <input
                  className="w-full input login-form-box-shadow placeholder:open-sans-regular"
                  type="url"
                  name="url"
                  id="urll"
                  placeholder="Enter Photo URL"
                  {...register("photourl", {
                    required: "url is required",
                  })}
                />
                {errors.photourl && (
                  <span className="text-red-800">
                    {errors.photourl.message}
                  </span>
                )}
              </div>

              <div>
                <label className="open-sans-bold text-[var(--text-color)]">Email </label>

                <input
                  className="w-full input login-form-box-shadow placeholder:open-sans-regular"
                  type="email"
                  name="email"
                  id="emails"
                  required
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-800">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="open-sans-bold text-[var(--text-color)]">Password</label>
                <div className="relative">
                  <input
                    className="w-full input login-form-box-shadow placeholder:open-sans-regular"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="passcode"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password must not exceed 16 characters",
                      },

                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                        message:
                          "Password must include at least one uppercase letter, one lowercase letter, and one number",
                      },
                    })}
                  />
                  <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className=" absolute  right-5 top-3 "
                  >
                    {showPassword ? (
                      <IoEye className="text-black text-base" />
                    ) : (
                      <IoEyeOff className="text-base text-black" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-800">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="check"
                  {...register("checkbook", { required: true })}
                />
                <label className=" open-sans-bold text-[var(--text-color)]">
                  Accept Term & Conditions
                </label>

                {errors.checkbook && (
                  <span className="text-red-800">This field is required</span>
                )}
              </div>
              <button className="w-full btn btn-secondary my-2 open-sans-bold text-white">
                {loading ? <img className="animate-spin w-10 " src="asset/image/loading.png" /> : "Register"}
              </button>
            </form>
            <p>{error}</p>
            <p className="text-center text-black py-2">
              <span className="pr-5 open-sans-bold text-white"> Have an account</span>
              <Link to="/signin" className="open-sans-bold text-gray-700 hover:border-b-[2px] border-black ">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
