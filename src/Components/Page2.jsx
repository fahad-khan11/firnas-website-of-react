import React from 'react'

const Page2 = ({paragraph,image,text,company}) => {
  return (
    <div className='flex flex-row pb-40 rounded-lg '>
      <div className='flex flex-col gap-20 border shadow-lg shadow-green-500  p-[40px] rounded-xl'>
        <p className='mt-8 pl-5 pr-5 '>{paragraph}</p>
        <div className='flex flex-row gap-10 ml-8 '>
            <img src={image} alt="" className='w-[150px] h-auto' />
            <p className='font-semibold text-2xl text-white mt-20'>{text}</p>
            <div className='font-semibold text-2xl text-green-500 ml-20 mt-20'>{company}</div>
        </div>
      </div>
    </div>
  )
}

export default Page2
