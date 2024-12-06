import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter';
const HeroSection = () => {
  const [test] = useTypewriter({
    words : ['Test','Design','Develop'],
    loop :true,
    typeSpeed:140,
    delaySpeed:200
  })
  return (
    <div className="h-[100vh] bg-cover text-white  ">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
    autoPlay
    loop
    muted
  >
    <source src="/Images/vedio.mp4" type="video/mp4" />
  </video>
      <div className="flex flex-col justify-center align-center h-[80vh] ml-4">
        <h1 className="text-8xl font-bold mb-4">We <span className='text-green-500'>{test}</span></h1>
        <p className="text-3xl max-w-3xl mb-8 mt-8">We design, develop, and deliver comprehensive software, prioritizing user experience, engagement, and intelligent solutions for diverse platforms</p>
        <div className='flex flex-row gap-2 ml-0'>
  <button className='text-white bg-green-500 text-2xl rounded-full w-80 h-20 flex items-center justify-center'>
    Quick Contact<FaArrowRight />
  </button>
  <button className='text-white bg-none border border-green-400 text-2xl hover:border-green-600 rounded-full w-80 h-20 shadow-lg shadow-green-500 hover:text-green-500'>
    Learn more
  </button>
</div>

  
      </div>

      
      
    </div>
  );
};

export default HeroSection;

