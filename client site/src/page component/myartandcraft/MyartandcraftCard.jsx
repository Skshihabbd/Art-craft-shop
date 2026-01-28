import { useState } from "react";
import { Link } from "react-router-dom";

const MyartandcraftCard = ({ data, handleDelete }) => {
  const { photourl, _id, name, rating, price } = data;
  const [error, setError] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {!error ? (
          <img
            src={photourl}
            alt={name || "product"}
            onError={() => setError(true)}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-red-400 text-sm font-medium">
              Image Not Available
            </p>
          </div>
        )}

        {/* Rating Badge */}
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          ⭐ {rating || 0}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-56">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {name}
          </h3>

          <p className="text-xl font-bold text-emerald-600">৳ {price}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Link to={`/update/${_id}`} className="flex-1">
            <button className="w-full py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 transition">
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex-1 py-2 text-sm font-semibold rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyartandcraftCard;
