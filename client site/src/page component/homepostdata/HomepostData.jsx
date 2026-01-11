import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import axios from "axios";

const HomepostData = () => {
  const [categories, setCategories] = useState("");
  const [customize, setCustomize] = useState("");
  const [stocks, setStocks] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.names.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const processingtime = form.processingtime.value;
    const details = form.details.value;
    const photourl = form.image.files[0];

    if (!photourl) return Swal.fire("Error", "Please select an image", "error");

    const formData = new FormData();
    formData.append("image", photourl);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );

      const craftinfoitem = {
        name,
        rating,
        price,
        processingtime,
        stocks,
        details,
        photourl: data.data.display_url,
        categories,
        customize,
      };

      const res = await fetch("https://server-site-wine.vercel.app/adminsenddata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(craftinfoitem),
      });

      const result = await res.json();
      if (result.acknowledged) {
        Swal.fire("Success!", "Data has been added.", "success");
        form.reset();
        setStocks("");
        setCategories("");
        setCustomize("");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 hover:border-indigo-300 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 shadow-sm";

  return (
    <div>
      <Navbar />
      <TiTleMenu />
      <div className="bg-[#F4F3F0] py-12">
        <h1 className="text-center text-3xl font-semibold mb-4">Add Product Category</h1>
        <p className="text-center w-4/6 mx-auto mb-10 text-gray-600">
          Fill the form below to add your craft item. Ensure all fields are completed correctly.
        </p>

        <section className="p-8 w-11/12 mx-auto bg-white rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-1 block">Item Name</label>
                <input
                  name="names"
                  type="text"
                  placeholder="Enter craft name"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Price (BDT)</label>
                <input
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Rating</label>
                <input
                  name="rating"
                  type="text"
                  placeholder="Enter rating"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Processing Time (days)</label>
                <input
                  name="processingtime"
                  type="number"
                  placeholder="Enter processing time"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Stock Status</label>
                <select
                  value={stocks}
                  onChange={(e) => setStocks(e.target.value)}
                  required
                  className={inputStyle}
                >
                  <option value="">Select Stock Status</option>
                  <option value="In stock">In Stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <select
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  required
                  className={inputStyle}
                >
                  <option value="">Select Category</option>
                  <option value="Card Making">Card Making</option>
                  <option value="Scrapbooking">Scrapbooking</option>
                  <option value="Paper Quilling & origami">Paper Quilling & Origami</option>
                  <option value="Glass Painting">Glass Painting</option>
                  <option value="Lampworking">Lampworking</option>
                  <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Customization</label>
                <select
                  value={customize}
                  onChange={(e) => setCustomize(e.target.value)}
                  required
                  className={inputStyle}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Short Description</label>
                <input
                  name="details"
                  type="text"
                  placeholder="Enter description"
                  required
                  className={inputStyle}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1 block">Photo</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  className={inputStyle}
                />
              </div>
            </div>

            <button className="btn btn-block bg-black text-yellow-500 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
              Add Item
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomepostData;
