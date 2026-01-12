import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
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

  const onSubmit = async (data) => {
    const { email, password, UserName, photourl } = data;

    try {
      setError("");
      setLoading(true);

      const result = await SignUp(email, password);

      if (!result?.user) {
        throw new Error("Registration failed");
      }

      await updateUser(UserName, photourl);

      reset();
      navigate(location?.state?.from || "/");
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
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
    <div className="w-full max-w-md lg:w-1/2 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 md:p-10 transition-all">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Create Account
        </h2>
        <p className="text-gray-500 mt-2 font-medium">
          Join us and explore all features
        </p>
      </div>

      {/* Global Error */}
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
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all duration-200"
            placeholder="John Doe"
            {...register("UserName", { required: "Name is required" })}
          />
          {errors.UserName && (
            <p className="text-red-500 text-xs mt-1 ml-1 font-medium italic">
              {errors.UserName.message}
            </p>
          )}
        </div>

        {/* Photo URL Input */}
        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">Photo URL</label>
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all duration-200"
            placeholder="https://example.com/photo.jpg"
            {...register("photourl", { required: "Photo URL is required" })}
          />
          {errors.photourl && (
            <p className="text-red-500 text-xs mt-1 ml-1 font-medium italic">
              {errors.photourl.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all duration-200"
            placeholder="example@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 ml-1 font-medium italic">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all duration-200"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-secondary transition-colors"
            >
              {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 ml-1 font-medium italic">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="flex flex-col gap-1 py-1">
          <div className="flex items-center gap-3 group cursor-pointer">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary cursor-pointer"
              {...register("checkbook", { required: "You must accept terms" })}
            />
            <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer select-none">
              I accept <span className="text-secondary font-semibold hover:underline">Terms & Conditions</span>
            </label>
          </div>
          {errors.checkbook && (
            <p className="text-red-500 text-xs font-medium italic">{errors.checkbook.message}</p>
          )}
        </div>

        {/* Register Button */}
        <button
          disabled={loading}
          className="group relative w-full py-3.5 px-4 bg-gray-900 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:bg-black active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none shadow-lg shadow-gray-200"
        >
          <span className="relative z-10">
            {loading ? "Creating account..." : "Register"}
          </span>
        </button>
      </form>

      <p className="text-center text-[15px] mt-8 text-gray-500 font-medium">
        Already have an account?
        <Link to="/signin" className="text-secondary font-bold ml-2 hover:underline decoration-2 underline-offset-4">
          Login
        </Link>
      </p>
    </div>
  </div>
</div>
  );
};

export default SignUP;
