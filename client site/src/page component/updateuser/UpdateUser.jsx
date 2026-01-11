import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const [spin, setSpin] = useState(false);
  const userUpdate = useLoaderData();
  console.log(userUpdate);

  const { _id, name, rating, price, processingtime, stocks, details, categories: defaultCat, customize: defaultCustom } = userUpdate;

  const [categories, setCategories] = useState(defaultCat || "");
  const [customize, setCustomize] = useState(defaultCustom || "");
  const [stockStatus, setStockStatus] = useState(stocks || "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const nameValue = form.names.value;
    const ratingValue = form.rating.value;
    const priceValue = form.price.value;
    const processingTimeValue = form.processingtime.value;
    const detailsValue = form.details.value;
    const imageFile = form.image.files[0];

    if (!imageFile) {
      Swal.fire("Error", "Please select an image", "error");
      return;
    }

    setSpin(true);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );

      const craftinfo = {
        name: nameValue,
        rating: ratingValue,
        price: priceValue,
        processingtime: processingTimeValue,
        stocks: stockStatus,
        details: detailsValue,
        photourl: data.data.display_url,
        categories,
        customize,
      };

      const res = await fetch(`https://server-site-wine.vercel.app/usersenddata/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(craftinfo),
      });

      const info = await res.json();

      if (info.acknowledged) {
        setSpin(false);
        Swal.fire("Success!", "Data updated successfully", "success");
        form.reset();
      }
    } catch (error) {
      setSpin(false);
      console.error(error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <TiTleMenu />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Update Craft Data</h1>
        <p className="text-center text-gray-600 mb-10">
          Update the craft details below. Make sure all fields are filled correctly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-xl shadow-lg">
          {/* Item Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Item Name</label>
            <input
              type="text"
              name="names"
              defaultValue={name}
              placeholder="Enter craft name"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
            />
          </div>

          {/* Price and Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Price (BDT)</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Enter price"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter rating"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              />
            </div>
          </div>

          {/* Processing Time and Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Processing Time (days)</label>
              <input
                type="number"
                name="processingtime"
                defaultValue={processingtime}
                placeholder="Enter processing time"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Stock Status</label>
              <select
                required
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              >
                <option value="" disabled>
                  Select stock
                </option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Short Description</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter short description"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Photo</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
            />
          </div>

          {/* Category and Customize */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Category</label>
              <select
                required
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="CardMaking">Card Making</option>
                <option value="Scrapbooking">Scrapbooking</option>
                <option value="PaperQuillingorigami">Paper Quilling & Origami</option>
                <option value="GlassPainting">Glass Painting</option>
                <option value="Lampworking">Lampworking</option>
                <option value="GlassDyingStaining">Glass Dying & Staining</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Customization</label>
              <select
                required
                value={customize}
                onChange={(e) => setCustomize(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 
             placeholder-slate-400 outline-none transition-all duration-300
             hover:border-indigo-300
             focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500
             shadow-sm"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors flex justify-center items-center"
          >
            {spin ? <FaSpinner className="animate-spin" /> : "Update Craft"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default UpdateUser;
