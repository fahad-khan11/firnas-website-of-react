import React from 'react';
import Page from './Page';

const Main = () => {
  return (
    <div>
      <div className="text-center pt-[80px] pb-[40px]">
        <h1 className="text-[#051636] text-8xl font-bold">
          What we <span className="text-[#18ad69]">do</span>
        </h1>
      </div>

     
      <div className='grid grid-cols-3 gap-x-20 ml-20 mr-20 mb-10 '>
        <div className="rounded-2xl overflow-hidden">
        <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Web Application
              <span className="text-[#18ad69] text-6xl font-extrabold ml-1">
                Development
              </span>
            </h1>
          }
          image='/Images/one.png'
          bgColor = "#051636"
        />
        </div>

       <div className="rounded-2xl overflow-hidden" >
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Social Media
              <span className="text-[#051636] text-6xl font-extrabold ml-1">
                Marketing
              </span>
            </h1>
          }
          image= '/Images/two.png' 
          bgColor = "#18ad69"
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Mobile Application
              <span className="text-[#18ad69] text-6xl font-extrabold ml-1">
                Development
              </span>
            </h1>
          }
          image='/Images/three.png'
          bgColor = "#051636"
        />
        </div>
      </div> 
      <div className='grid grid-cols-3 gap-x-20 ml-20 mr-20 mb-20'>
      <div className="rounded-2xl overflow-hidden">
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Ui/Ux
              <span className="text-[#051636] text-6xl font-extrabold ml-1">
                Designing
              </span>
            </h1>
          }
          image= '/Images/four.png' 
          bgColor = "#18ad69"
        />
      </div>
      <div className="rounded-2xl overflow-hidden">
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold ">
              Artifical
              <span className="text-[#18ad69] text-6xl font-extrabold ml-1">
              Inteligence
              </span>
            </h1>
          }
          image='/Images/five.png'
          bgColor = "#051636"
        />
      </div>

         <div className="rounded-2xl overflow-hidden">
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Brand
              <span className="text-[#18ad69] text-6xl font-extrabold ml-1">
              Identify Design
              </span>
            </h1>
          }
          image='/Images/six.png'
          bgColor = "#051636"
        />
      </div>    
      </div>
      <div className='grid grid-cols-2 gap-x-20 ml-20 mr-20 mb-20'>
      <div className="rounded-2xl overflow-hidden">
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Search
              <span className="text-[#18ad69] text-6xl font-extrabold ml-1">
              Engine Optimization
              </span>
            </h1>
          }
          image='/Images/seven.png'
          bgColor = "#051636"
        />
      </div>   
      <div className="rounded-2xl overflow-hidden">
      <Page
          heading={
            <h1 className="flex flex-wrap pl-6 text-white text-6xl font-bold">
              Embedded
              <span className="text-[#051636] text-6xl font-extrabold ml-1">
                Linux
              </span>
            </h1>
          }
          image= '/Images/eight.png' 
          bgColor = "#18ad69"
        />
      </div>
      </div>
    </div>
  );
};

export default Main;
