import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import pic1 from "/Images5/pic1.png";
import pic2 from "/Images5/pic2.png";
import pic3 from "/Images5/pic3.png";
import pic4 from "/Images5/pic4.png";
import pic5 from "/Images5/pic5.png";
import pic6 from "/Images5/pic6.png";
import pic7 from "/Images5/pic7.png";

const Pics = () => {
  const pictures = [
    { id: 1, pic: pic1 },
    { id: 2, pic: pic2 },
    { id: 3, pic: pic3 },
    { id: 4, pic: pic4 },
    { id: 5, pic: pic5 },
    { id: 6, pic: pic6 },
    { id: 7, pic: pic7 },
  ];

  return (
    <div>
       <div className="mt-28 flex flex-col justify-center items-center">
        <p className="text-6xl font-normal mb-4">Pull the trigger!</p>
        <h1 className="max-w-[800px] text-block text-[#051636] text-8xl font-extrabold">
          Let’s bring your vision to life.
        </h1>
        <button className="w-[400px] h-16 bg-green-500 text-2xl mt-20 rounded-full text-white shadow-lg">
          Let's Work Together
        </button>
        <div className="mt-48 mb-40">
          <h1 className="text-[#18ad69] text-8xl font-bold">
            Our<span className="text-[#051636]">Accreditation</span>
          </h1>
        </div>
      </div>
      <div className="mb-20">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={1800}
        modules={[Autoplay]}
      >
        {pictures.map(({ id, pic }) => (
          <SwiperSlide key={id}>
            <div className="w-full h-[200px] border border-gray-400 rounded-lg flex items-center justify-center mb-10">
              <img src={pic} alt={id} className="w-full h-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Pics;
