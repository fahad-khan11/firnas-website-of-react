import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import image1 from "/Images2/image1.png";
import image2 from "/Images2/image2.png";
import image3 from "/Images2/image3.png";
import image4 from "/Images2/image4.png";
import image5 from "/Images2/image5.png";
import image6 from "/Images2/image6.png";
import image7 from "/Images2/image7.png";
import image8 from "/Images2/image8.png";

const Work = () => {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image7 },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#051636]">
      <div>
        <h1 className="text-8xl font-bold text-center mt-10 mb-10 text-white">
          See Our <span className="text-green-500">Work</span>
        </h1>
        <p className="text-2xl max-w-screen-md text-center mt-10 mb-10 text-white">
          Explore our portfolio to see how we transform ideas into exceptional
          digital experiences. From creative design to innovative development, our
          work speaks for itself.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mb-32 px-20">
  {images.map(({ id, image }) => (
    <div
      className="overflow-hidden group w-[400px] h-[500px] rounded-lg shadow-lg"
      id={id}
    >
      <img
        src={image}
        alt={id}
        className="w-full h-full object-cover object-top transition-all duration-[5000ms] ease-in-out hover:object-bottom"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Work;
