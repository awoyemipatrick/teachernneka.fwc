import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
// import { LogoCloud } from '.';

export const HomeCoverSection = () => {
  return (

    <>
    
     <section className='bg-[#655CFE] grid grid-cols-1 md:grid-cols-2 px-6 my-8 items-center rounded gap-4 '>
        <div className='px-[10%] py-[4%]'>
          <h1 className='text-white text-[30px] flex justify-center'>Spreading Love and Faith Through Community </h1>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 px-[10%] gap-6'>
          <div className='text-white flex items-center gap-2 '>
            <span className=' bg-[#4D43F5] p-[10px] rounded-full '>
              <FaBookOpen className='h-[44px] w-[44px] ' />
            </span>
            <h1 className='leading-[26px] text-[16px] '> Interactive Bible Class for Children</h1>
          </div>
          <div className='text-white flex items-center gap-2 w-full '>
            <span className=' bg-[#4D43F5] p-[10px] rounded-full '>
              <FaStar className='h-[44px] w-[44px] ' />
            </span>
            <h1 className='leading-[26px] text-[16px] '> Empowering Faith-Based Corporate Training </h1>
          </div>
        </div>
      </section>
      <section className=''>
        <div>
          {/* <LogoCloud /> */}
        </div>
      </section>
    </>
  )
}

