import React from 'react';
import Image4 from '../assets/images/image copy.png';

function MainSlider() {
  return (
    <div className="mx-auto max-w-[440px] sm:max-w-[768px] sm:p-8 md:p-12 md:max-w-[802px] lg:max-w-[1000px] xl:max-w-[1410px] h-full border border-gray-200 rounded-lg shadow bg-gray-300 flex items-center justify-center overflow-hidden">
      <div className='flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 md:p-12 space-y-4 lg:space-y-0 lg:space-x-4'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <span className='text-[#ff461e] text-sm font-semibold'>TRACTOR PRODUCTS</span>
          <h2 className='text-[#ff461e] uppercase mb-2 text-2xl sm:text-3xl md:text-4xl font-bold'>
            Buy Your Tractor Today!
          </h2>
          <button
             className='bg-[#ff461e] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg uppercase font-semibold transition-colors'>
            <a href="/shop">Shop Now</a>          
          </button>
        </div>
        <div className='mt-4 lg:mt-0 w-full flex justify-center h-80'>
          <img src={Image4} alt='Tractor' className="max-w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default MainSlider;
