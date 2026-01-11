import { useLoaderData } from "react-router-dom";
import Navbar from "../../sharedcomponent/navbar/Navbar";

const Cradviewdetailsmake = () => {
  const data = useLoaderData();
  const { photourl, price, title } = data;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8">

          {/* Image Section */}
          <div className="bg-[#F5F5F5] rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={photourl}
              alt={title}
              className="w-full h-[500px] object-contain hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">
              {title || "Premium Cotton Soft Wear"}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              ⭐⭐⭐⭐☆ <span>(4.5)</span>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-gray-900">
              ৳ {price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Maximize comfort with this premium-quality cotton product designed
              for daily wear. Soft texture, breathable fabric, and elegant
              finishing make it a perfect choice for modern lifestyles.
            </p>

            <hr />

            {/* Meta Info */}
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                <span className="font-medium">Stock Status:</span>{" "}
                <span className="text-green-600">In Stock</span>
              </p>
              <p>
                <span className="font-medium">Processing Time:</span> 7–10 Days
              </p>
              <p>
                <span className="font-medium">Category:</span> Handcrafted
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
              <button className="
                bg-gray-900 text-white
                py-4 rounded-full
                text-lg font-medium
                hover:bg-[#9EA18E]
                transition-all duration-300
              ">
                Buy Now
              </button>

              <button className="
                border border-gray-300
                py-4 rounded-full
                text-lg font-medium
                hover:bg-gray-100
                transition-all duration-300
              ">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cradviewdetailsmake;
