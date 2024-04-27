import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Feature_3 from '@/public/assets/feature_img3.jpg'

export const HomeFeature3 = () => {
  return (
    <div className='container mx-auto w-full flex flex-col-reverse lg:flex-row py-[2rem] gap-4 '>
      <section className='mx-7 flex flex-col justify-center '>
        <div className='mb-7'>
          <h2 className=' font-bold text-[20px] md:text-[25px] lg:text-[38px] '>Welcome to Our Wellness Center </h2>
          <p className=' text-[12px] md:text-[16px] font-normal xlg:h-[30px] '> Find spiritual tranquility and physical health at our Wellness Center, offering classes and guidance in Christian wellness practices. </p>
        </div>
        <div className='text-white mx-2 mt-[1rem] '>
          <Link href={'/resort'} className='bg-[#655CFE] rounded-3xl p-3 '>Visit Now</Link>
        </div>
      </section>
      <section className=''>
        <Image
          src={Feature_3}
          alt='Feature Image 3'
          className='rounded-3xl'
        />
      </section>

    </div>
  )
}
