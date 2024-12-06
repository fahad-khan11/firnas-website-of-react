import React from 'react'
import Page2 from './Page2'
const Card = () => {
  return (
    <div className='bg-[#051636]'>
    <div className="text-center pt-[80px] pb-[40px]">
        <h1 className="text-white text-8xl font-bold">
         Our clients simply love <span className="text-[#18ad69] font-semibold">what we do</span>
        </h1>
    </div>
    <div className='flex flex-row m-x-10 ml-20 mr-20 gap-6 mt-10'>
        <div className=''>
            <Page2 paragraph={
                <p className="text-4xl max-w-screen-sm mb-32 gap-20 text-white">They have also been easily accessible and responsive with my questions and concerns along the way. Firnas Tech (Pvt) Ltd. managed to provide successful support and development in a timely manner. ."</p>
            } 
            image = '/Images4/card1.png'
            text = "Ava Mitchell"
            company = "Vivo Group"
            />
        </div>

        <div>
            <Page2 paragraph={
                <p className="text-4xl max-w-screen-sm mb-32 text-white">"Incredible service! The team delivered a stunning project ahead of schedule. Their creativity and professionalism are unmatched. Highly recommended for any web development needs! Truly exceptional work throughout."</p>
            } 
            image = '/Images4/card2.png'
            text = "Michael Guzman"
            company = "Elastx"
            />
        </div>
        <div>
            <Page2 paragraph={
                <p className="text-4xl max-w-screen-sm mb-32 text-white">One of the most professional software developers. The workers are very cooperative, and customer services are outstanding. Highly recommended for development work! Truly exceptional service delivered .</p>
            } 
            image = '/Images4/card3.png'
            text = "Oskar Karlsson"
            company = "Great IT"
            />
        </div>
    </div>
    </div>
  )
}

export default Card
