import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";

const Navbar = lazy(() => import("../../sharedcomponent/navbar/Navbar"));
const Footer = lazy(() => import("../../sharedcomponent/footer/Footer"));
const TiTleMenu = lazy(() => import("../../sharedcomponent/menu title/TiTleMenu"));
const Slider = lazy(() => import("../slider/Slider"));
const Categorycard = lazy(() => import("./Categorycard"));

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

// loading
export const NavbarSkeleton = () => {
  return (
    <div className="h-16 bg-white border-b animate-pulse flex items-center px-6">
      <div className="h-6 w-32 bg-gray-200 rounded"></div>

      <div className="ml-auto flex gap-4">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};


export const TitleMenuSkeleton = () => {
  return (
    <div className="bg-white border-b py-4 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 flex gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-5 w-20 bg-gray-200 rounded"
          />
        ))}
      </div>
    </div>
  );
};

const SliderSkeleton = () => {
  return (
    <div className="w-full h-[80vh] rounded-3xl bg-gray-200 animate-pulse relative overflow-hidden">
      {/* overlay feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

      {/* text blocks */}
      <div className="absolute bottom-1/4 left-10 space-y-4">
        <div className="h-10 w-96 bg-gray-300 rounded" />
        <div className="h-4 w-72 bg-gray-300 rounded" />
        <div className="h-4 w-64 bg-gray-300 rounded" />
        <div className="h-10 w-40 bg-gray-300 rounded-full mt-4" />
      </div>
    </div>
  );
};




export const CategorySectionSkeleton = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-56 bg-gray-200 rounded"></div>
        <div className="h-4 w-40 bg-gray-200 rounded"></div>
      </div>

      {/* Slider cards */}
      <div className="flex gap-6 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-[260px] h-[340px] bg-gray-200 rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
};

export const FooterSkeleton = () => {
  return (
    <div className="bg-gray-100 mt-10 py-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const TopInfoBarSkeleton = () => {
  return (
    <div className="py-2 bg-[#AE9467]/70 animate-pulse flex justify-center">
      <div className="h-4 w-[520px] bg-white/40 rounded" />
    </div>
  );
};
// loading
const Home = () => {
  const datas = useLoaderData();

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Top Info Bar */}
      

      <Suspense fallback={<TopInfoBarSkeleton />}>
        <div className="bg-[#AE9467] text-white text-center text-sm py-2 tracking-wide">
        We ship nationwide · 30-day return policy · Free shipping on orders over
        $75
      </div>
        </Suspense>

      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>
      </div>

      {/* Title Menu */}
      <section className="border-b bg-white">
        <Suspense fallback={<TitleMenuSkeleton />}>
          <TiTleMenu />
        </Suspense>
      </section>

      {/* Slider */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <Suspense fallback={<SliderSkeleton />}>
          <Slider />
        </Suspense>
      </section>

      {/* Category Section */}
       <Suspense fallback={<CategorySectionSkeleton />}>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Craft Categories
          </h1>
          <span className="text-sm text-gray-500">
            Explore handmade collections
          </span>
        </div>

       
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            className="pb-4"
          >
            {datas?.map((data) => (
              <SwiperSlide key={data._id} className="!w-[260px] py-10">
                <Categorycard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        
      </section>
</Suspense>
      {/* Footer */}
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;

