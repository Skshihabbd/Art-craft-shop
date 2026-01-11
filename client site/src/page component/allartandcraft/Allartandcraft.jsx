import { useLoaderData } from "react-router-dom";
import Allartandcraftcard from "./Allartandcraftcard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";

const Allartandcraft = () => {
  const loadedData = useLoaderData();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          All Arts & Crafts
        </h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="min-w-full text-left text-sm">
            
            {/* Table Head */}
            <thead className="bg-gray-100 text-gray-700 sticky top-0">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {loadedData.map((datas) => (
                <Allartandcraftcard key={datas._id} datas={datas} />
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Allartandcraft;
