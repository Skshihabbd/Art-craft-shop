import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import axios from "axios"; 
import Custom from "../../sharedcomponent/custom/Custom";
import PageTitle from "../../sharedcomponent/page-title/PageTitle";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignUp, updateUser } = Custom();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);

      const imageFile = { image: data.image[0] };
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const uploadedPhotoURL = res.data.data.display_url;

        const result = await SignUp(data.email, data.password);

        if (!result?.user) {
          throw new Error("Registration failed");
        }

       
        await updateUser(data.UserName, uploadedPhotoURL);

        reset();
        navigate(location?.state?.from || "/");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong during upload or signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 md:p-8">
      <PageTitle title="Register your account" />

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Image Section */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#AE9467] to-slate-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/asset/image/arts and craft image.jpg"
              className="relative rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              alt="Register visual"
            />
          </div>
        </div>

        {/* Form Card Section */}
        <div className="w-full max-w-md lg:w-1/2 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 mt-2 font-medium">Join us and upload your profile picture</p>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white outline-none transition-all"
                placeholder="John Doe"
                {...register("UserName", { required: "Name is required" })}
              />
              {errors.UserName && <p className="text-red-500 text-xs mt-1">{errors.UserName.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-secondary hover:file:bg-secondary/20 transition-all"
                {...register("image", { required: "Photo is required" })}
              />
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white outline-none transition-all"
                placeholder="example@email.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white outline-none"
                  placeholder="********"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-black disabled:opacity-70 transition-all"
            >
              {loading ? "Uploading & Creating..." : "Register"}
            </button>
          </form>

          <p className="text-center text-[15px] mt-8 text-gray-500">
            Already have an account?
            <Link to="/signin" className="text-secondary font-bold ml-2 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;