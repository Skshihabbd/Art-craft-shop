/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Custom from "../../sharedcomponent/custom/Custom";
import SocialLogin from "../../page component/SocialLogin/SocialLogin";
import PageTitle from "../../sharedcomponent/page-title/PageTitle";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SignIn = () => {
  const { SignIn } = Custom();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await SignIn(email, password);
      toast.success("Welcome back!");
      reset();
      navigate(location?.state || "/");
    } catch (error) {
      toast.error("Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <PageTitle title="Sign In" />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-3xl" />
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] rounded-full bg-rose-50/50 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
              Sign In
            </h2>
            <p className="text-slate-500 text-sm">
              Enter your details to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.email ? "border-red-300" : "border-slate-100"} focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all duration-200 outline-none text-slate-700`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 font-medium ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.password ? "border-red-300" : "border-slate-100"} focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all duration-200 outline-none text-slate-700`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEyeOutline size={20} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-[11px] text-red-500 font-medium ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transform active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:pointer-events-none shadow-lg shadow-slate-200"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 tracking-widest font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Section */}
          <div className="mt-6">
            <SocialLogin />
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-500 mt-8">
            New here?
            <Link
              to="/signup"
              className="ml-1.5 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer position="bottom-right" hideProgressBar />
    </div>
  );
};

export default SignIn;
