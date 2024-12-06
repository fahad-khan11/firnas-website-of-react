import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='h-20 flex flex-row item-center justify-between'>
    <div className='mt-4'>
      <img src="Images/firnas.png" alt="" width={"300px"} height={"450px"} />
    </div>
    <div className='flex flex-col justify-between  text-white pt-[20px]'>
        <ul  className='flex flex-row items-center gap-8'>
            <li className='font-bold text-3xl underline text-green-500'>HOME</li>
            <li className='font-bold text-3xl'>ABOUT</li>
            <li className='font-bold text-3xl'>OUT TEAM</li>
            <li className='font-bold text-3xl'>SERVICES</li>
            <li className='font-bold text-3xl'>CONTACT</li>
        </ul>
    </div>

    <div className='flex flex-col justify-between  text-white p-[20px]'>
       <ul  className='flex flex-row items-center gap-8 mr-4'>
        <li className='text-5xl'><FaFacebook /></li>
        <li className='text-5xl'><FaInstagram /></li>
        <li className='text-5xl'><FaLinkedin /></li>
       </ul>
    </div>

    </div>
  )
}

export default Navbar
