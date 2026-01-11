import { Link } from "react-router-dom";

const Allartandcraftcard = ({ datas }) => {
  const { name, price, categories, stocks, photourl, _id } = datas;

  return (
    <tr className="border-b hover:bg-gray-50 transition duration-200">
      {/* Image */}
      <td className="px-4 py-3">
        <img
          className="w-12 h-12 rounded-lg object-cover shadow"
          src={photourl}
          alt={name}
        />
      </td>

      {/* Name */}
      <td className="px-4 py-3 font-medium text-gray-800">{name}</td>

      {/* Price */}
      <td className="px-4 py-3 text-gray-700">৳ {price}</td>

      {/* Category */}
      <td className="px-4 py-3 text-gray-500">{categories}</td>

      {/* Stock Status */}
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium
          ${stocks > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
        `}
        >
          {stocks > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </td>

      {/* Action */}
      <td className="px-4 py-3">
        <Link to={`/cardview/${_id}`}>
          <button className="bg-gray-100 text-green-500 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-sm transition duration-200">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Allartandcraftcard;
