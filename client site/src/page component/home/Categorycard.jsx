import { Link } from "react-router-dom";

const Categorycard = ({ data }) => {
  const { photourl, categories } = data;

  return (
   <div className="group relative w-64 overflow-hidden rounded-3xl bg-white shadow-md transition-transform duration-300 ease-out hover:-translate-y-2 will-change-transform">
      
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={photourl}
          alt={categories}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <h3 className="absolute bottom-4 left-0 w-full px-4 text-center text-xl font-semibold tracking-wide text-white">
          {categories}
        </h3>
      </div>

      {/* Action Section */}
      <div className="flex justify-center p-5">
        <Link to={`/allcategory/${categories}`}>
          <button className="rounded-full border border-[#AE9467] px-6 py-2 text-sm font-medium text-[#AE9467] transition-colors duration-200 hover:bg-[#AE9467] hover:text-white">
            View 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categorycard;
