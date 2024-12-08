import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeImg1 from "../assets/home-img1.png";
import Brand1 from "../assets/brand1.png";
import Brand2 from "../assets/brand2.png";
import Brand3 from "../assets/brand3.png";
import Brand4 from "../assets/brand4.png";
import useScrollTo from "../hooks/useScrollTo";

function Home() {
  const { handleScroll } = useScrollTo();
  const [text] = useTypewriter({
    words: ["Content Creator", "Emcee", "Radio Jockey", "Model"],
    loop: {},
    typeSpeed: 160,
    deleteSpeed: 100,
  });

  const brands = [
    { src: Brand1, alt: "Brand 1" },
    { src: Brand2, alt: "Brand 2" },
    { src: Brand3, alt: "Brand 3" },
    { src: Brand4, alt: "Brand 4" },
  ];
  return (
    <>
      <div className="h-full bg-cover bg-center bg-gradient-to-r from-soft to-softWhite bg-no-repeat flex items-center px-10 py-20">
        <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center lg:flex-row mt-24">
          <div className="flex flex-col items-center text-center text-black lg:items-start lg:text-left md:w-3/5">
            <h1 className="text-sm font-semibold md:text-lg mb-5 md:mb-7">
              👋, MY NAME IS SANDHYA
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              I'm a <span>{text}</span>
              <span>
                <Cursor />
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-xl mb-2 md:mb-4">
              Based in Bhaktapur, Nepal.
            </p>
            <button
              className="btn-primary"
              onClick={() => handleScroll("contact")}
            >
              LET'S START
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <img
              src={HomeImg1}
              alt="Home"
              className="w-full max-w-md md:max-w-lg lg:max-w-3xl"
            />
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        spaceBetween={10} // Reduced spacing between slides
        slidesPerView={2} // Default for larger screens (desktop)
        breakpoints={{
          // Mobile (default)
          320: {
            slidesPerView: 1, // 1 slide per view on mobile
            spaceBetween: 10, // Reduced space between slides on mobile
          },
          // Tablet (min-width: 640px)
          640: {
            slidesPerView: 2, // 2 slides per view on tablet
            spaceBetween: 20, // Slightly more space between slides on tablet
          },
          // Desktop (min-width: 1024px)
          1024: {
            slidesPerView: 2, // 3 slides per view on desktop
            spaceBetween: 30, // More space between slides on desktop
          },
        }}
        className="swiper bg-[#0B1221] py-1 px-2"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                title={brand.alt}
                className="w-20 h-20 lg:w-32 lg:h-32 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Home;
