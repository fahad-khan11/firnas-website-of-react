import React from 'react';

const Page = ({ heading,image,bgColor}) => {
  return (
    <div style={{backgroundColor : bgColor}} className=''>
      <div className='flex flex-col justify-between w-[650px] h-[800px] '>
        {heading}
      
        <img src={image} alt="" className='h-[800px] w-full object-contain'/>

      </div>

    </div>
   
  );
};

export default Page;
