import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/TMQL6y0P/code-1.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-4xl md:text-6xl font-bold">
                Entering the World of Code & Innovation
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Discover innovative tech every day by day.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover object-fill bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/Wvs4GD9H/sl2.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-4xl md:text-6xl font-bold">
                Fresh Pesticide-free vegetables
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Home automation made easy and affordable.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/zcPZv1x/sl1-1.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-4xl md:text-6xl font-bold">
                Explore The Future Technology
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                AI , VR & more tech — delivered to your door.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
