import { useEffect, useState } from "react";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Custom from "../../sharedcomponent/custom/Custom";
import MyartandcraftCard from "./MyartandcraftCard";
import Swal from "sweetalert2";

const categories = [
  "CardMaking",
  "Scrapbooking",
  "PaperQuillingorigami",
  "GlassPainting",
  "Lampworking",
  "GlassDyingStaining"
];

const MyartsandCraftList = () => {
  const { users } = Custom();
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const limit = 4;

  // Fetch Data function
  const fetchData = async (reset = false) => {
    if (!users?.email) return;

    setLoading(true);

    try {

      const res = await fetch(
        `http://localhost:5020/usersendcollections?email=${users.email}&category=${category}&skip=${reset ? 0 : skip}&limit=${limit}`
      );
      const resJson = await res.json();
      const { data = [], total = 0 } = resJson;

      setItems((prev) => (reset ? data : [...prev, ...data]));
      setTotal(total);
      setSkip((prev) => (reset ? data.length : prev + data.length));
    } catch (error) {
      console.error("Fetch error:", error);
      Swal.fire("Error", "Unable to fetch data", "error");
    }

    setLoading(false);
  };

  // Initial fetch & refetch on category or user change
  useEffect(() => {
    fetchData(true);
  }, [users, category]);

  // Delete handler
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `http://localhost:5020/usersenddata/${id}`,
          { method: "DELETE" }
        );
        const data = await res.json();

        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setItems((prev) => prev.filter((item) => item._id !== id));
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire("Error", "Could not delete item", "error");
      }
    }
  };

  // Category change
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSkip(0); // reset skip for new category
  };

  return (
    <div>
      <Navbar />

      {/* Category Buttons */}
      <div className="my-4 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${category === cat ? "btn-primary" : "btn-outline"}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}

        <button
          className={`btn ${category === "" ? "btn-primary" : "btn-outline"}`}
          onClick={() => handleCategoryChange("")}
        >
          All
        </button>
      </div>

      {/* Items Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 w-10/12 mx-auto">
        {items.map((data) => (
          <MyartandcraftCard key={data._id} data={data} handleDelete={handleDelete} />
        ))}
      </div>

      {/* Load More Button */}
      {skip < total && (
        <div className="text-center my-5">
          <button
            className="rounded-full border border-[#AE9467] px-6 py-2 text-sm font-medium text-[#AE9467] transition-all duration-300 hover:bg-[#AE9467] hover:text-white hover:shadow-md"
            onClick={() => fetchData()}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MyartsandCraftList;
