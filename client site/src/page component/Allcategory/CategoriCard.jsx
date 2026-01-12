import { Link } from "react-router-dom";

const CategoriCard = ({ data }) => {
  const { price, _id, photourl, title } = data;

  return (
    <div className="group bg-white rounded-2xl  shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={photourl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          ⭐ <span>4.6</span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-gray-900">
          ৳ {price}
        </p>

        {/* Button */}
        <Link to={`/cardview/${_id}`}>
          <button className="
            w-full mt-2
            bg-gray-900 text-white
            py-2.5 rounded-full
            text-sm font-medium
            hover:bg-[#9EA18E]
            transition-all duration-300
          ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriCard;
