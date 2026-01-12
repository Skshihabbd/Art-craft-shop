import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Paper Craft Collection",
    article:
      "Explore delicate handmade paper crafts created with precision and passion. Each piece reflects creativity, sustainability, and artistic elegance.",
    image:
      "https://artistic-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1652437717",
  },
  {
    title: "Our Creative Mission",
    article:
      "We aim to revive traditional craftsmanship with modern design. Every artwork tells a story of dedication, culture, and innovation.",
    image:
      "https://artistic-codezeel.myshopify.com/cdn/shop/files/main-banner-1_1903x650.jpg?v=1652420060",
  },
  {
    title: "Handmade With Love",
    article:
      "Each craft is carefully handcrafted by skilled artisans. Unique textures and fine details make every item truly one of a kind.",
    image:
      "https://artistic-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1652437717",
  },
  {
    title: "Art That Inspires",
    article:
      "Bring warmth and inspiration to your space with artistic creations designed to elevate everyday living.",
    image:
      "https://artistic-codezeel.myshopify.com/cdn/shop/files/main-banner-2_1903x650.jpg?v=1652420082",
  },
];

const Slider = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[80vh] rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[80vh] flex items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <Fade direction="up" triggerOnce>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-3 sm:mb-4 max-w-3xl">
                    {slide.title}
                  </h1>
                </Fade>

                <Slide direction="up" delay={200} triggerOnce>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mb-4 sm:mb-6">
                    {slide.article}
                  </p>
                </Slide>

                <Slide direction="up" delay={400} triggerOnce>
                  <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#AE9467] text-white text-xs sm:text-sm tracking-wide hover:opacity-90 transition">
                    Explore Collection
                  </button>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
