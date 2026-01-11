import { Link } from "react-router-dom";

const TiTleMenu = ({ title = "About", subtitle = "Discover our story" }) => {
  return (
    <section className="relative w-full h-[45vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/6RNb4mp/aditya-wardhana-2-Tnr1-FMHy2g-unsplash.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-wide text-white mb-3">
          {title}
        </h1>
        <p className="text-sm lg:text-base text-gray-200 mb-6">
          {subtitle}
        </p>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-3 text-sm text-gray-300">
          <Link
            to="/"
            className="hover:text-[#AE9467] transition"
          >
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-[#AE9467]">{title}</span>
        </nav>
      </div>
    </section>
  );
};

export default TiTleMenu;
