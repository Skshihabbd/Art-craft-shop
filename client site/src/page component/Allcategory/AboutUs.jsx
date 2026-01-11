import Footer from "../../sharedcomponent/footer/Footer";
import Navbar from "../../sharedcomponent/navbar/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/6vl0KTwWtX0/maxresdefault.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide">
            We Are Committed To
            <span className="block text-yellow-400 mt-2">
              Give You The Best Service
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg">
            Our mission is to deliver high-quality craftsmanship with passion,
            creativity, and dedication. Customer satisfaction is always our top
            priority.
          </p>

          <button className="mt-10 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
