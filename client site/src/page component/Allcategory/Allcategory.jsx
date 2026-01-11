import { useLoaderData } from "react-router-dom";
import CategoriCard from "./CategoriCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";

const Allcategory = () => {
  const datas = useLoaderData();

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-semibold text-gray-800">
          Browse Categories
        </h1>
        <p className="text-gray-500 mt-2">
          Explore products by your favorite categories
        </p>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-8
        ">
          {datas.map((data) => (
            <CategoriCard key={data._id} data={data} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Allcategory;
