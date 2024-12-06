import React from 'react'
import photo1 from "/Images3/photo1.png"
import photo2 from "/Images3/photo2.png"
import photo3 from "/Images3/photo3.png"
import photo4 from "/Images3/photo4.png"
import photo5 from "/Images3/photo5.png"
import photo6 from "/Images3/photo6.png"
import photo7 from "/Images3/photo7.png"
import photo8 from "/Images3/photo8.png"
import photo9 from "/Images3/photo9.png"
import photo10 from "/Images3/photo10.png"
import photo11 from "/Images3/photo11.png"
import photo12 from "/Images3/photo12.png"
import photo13 from "/Images3/photo13.jpg"
import photo14 from "/Images3/photo14.png"
import photo15 from "/Images3/photo15.png"
import photo16 from "/Images3/photo16.png"
import photo17 from "/Images3/photo17.png"
import photo18 from "/Images3/photo18.png"
import photo19 from "/Images3/photo19.png"
import photo20 from "/Images3/photo20.png"
import photo21 from "/Images3/photo21.png"
import photo22 from "/Images3/photo22.png"
import photo23 from "/Images3/photo23.png"
import photo24 from "/Images3/photo24.png"
const Tech = () => {
    const photos = [
        {id : 1 ,  photo : photo1, name : "Angular"},
        {id : 2 ,  photo : photo2, name : "Vue.js"},
        {id : 3 ,  photo : photo3, name : "Angular"},
        {id : 4 ,  photo : photo4, name : "Node.js"},
        {id : 5 ,  photo : photo5, name : "Django"},
        {id : 6 ,  photo : photo6, name : "Laravel"},
        {id : 7 ,  photo : photo7, name : "Python"},
        {id : 8 ,  photo : photo8, name : "Java"},
        {id : 9 ,  photo : photo9, name : "Julia"},
        {id : 10 , photo : photo10, name : "LISP"},
        {id : 11 , photo : photo11, name : "Scala"},
        {id : 12 , photo : photo12, name : "Tensorflow"},
        {id : 13 , photo : photo13, name : "PyTorch"},
        {id : 14 , photo : photo14, name : "Azure"},
        {id : 15 , photo : photo15, name : "Docker"},
        {id : 16 , photo : photo16, name : "MySQL"},
        {id : 17,  photo : photo17, name : "MongoDB"},
        {id : 18 , photo : photo18, name : "MySQL"},
        {id : 19 , photo : photo19, name : "Scala"},
        {id : 20 , photo : photo20, name : "Tensorflow"},
        {id : 21 , photo : photo21, name : "Jira"},
        {id : 22 , photo : photo22, name : "Slack"},
        {id : 23 , photo : photo23, name : "WordPress"},
        {id : 24 , photo : photo24, name : "Shopify"},
    ]
  return (
    <div>
      <div>
        <h1 className="text-8xl font-bold text-center mt-10 mb-10 text-[#051636]]">
         Technologies We  <span className="text-green-500">Work With</span>
        </h1>
        <p className="text-2xl text-center mt-16 mb-10 text-gray-600 ">
        Firnas.tech leverages transformative technologies to accelerate our enterprise software development for unique business needs.
        </p>
      </div>
      <div className='grid grid-cols-8 px-20 pb-40 py-20 gap-10 mr-20 ml-20'>
      {
       photos.map(({ id, photo, name }) => (
        <div key={id} className="flex flex-col items-center">
          <img src={photo} alt={name} className="w-32 h-20 object-contain" />
          <p className="text-gray-700 mt-2 text-2xl">{name}</p>
        </div>
      ))
      }
      </div>
    </div>
  )
}

export default Tech
