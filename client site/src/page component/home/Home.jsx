import { useLoaderData } from "react-router-dom";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Slider from "../slider/Slider";
import Categorycard from "./Categorycard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const datas = useLoaderData();

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Top Info Bar */}
      <div className="bg-[#AE9467] text-white text-center text-sm py-2 tracking-wide">
        We ship nationwide · 30-day return policy · Free shipping on orders over
        $75
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Title Menu */}
      <section className="border-b bg-white">
        <TiTleMenu />
      </section>

      {/* Hero / Slider */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <Slider />
      </section>

      {/* Category Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Craft Categories
          </h1>
          <span className="text-sm text-gray-500">
            Explore handmade collections
          </span>
        </div>

        {/* <div className="grid grid-flow-col  gap-6 overflow-x-auto  pb-4">
          {datas?.map((data) => (
            <Categorycard key={data._id} data={data} />
          ))}
        </div> */}

        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            grabCursor={true}
            className="pb-4"
          >
            {datas?.map((data) => (
              <SwiperSlide key={data._id} className="!w-[260px] py-10">
                <Categorycard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
