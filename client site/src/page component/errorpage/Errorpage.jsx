import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div
      className="h-svh w-full bg-cover bg-center relative bg-black"
     
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-[120px] sm:text-[150px] font-extrabold text-yellow-500 drop-shadow-lg">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-300 mt-4 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
          Don’t worry, it happens to the best of us.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
