import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Feature_2 from '@/public/assets/feature_img2.jpg'



export const HomeFeature2 = () => {
  return (
    <div className='container mx-auto w-full flex flex-col lg:flex-row py-[2rem] gap-4 '>
      <section className=''>
        <Image
          src={Feature_2}
          alt='Feature Image 2'
          className='rounded-3xl'
        />
      </section>
      <section className='mx-7 flex flex-col justify-center '>
        <div className='mb-7'>
          <h2 className=' font-bold text-[20px] md:text-[25px] lg:text-[38px] '>Faith-based Corporate Trainings for Teams </h2>
          <p className=' text-[12px] md:text-[16px] font-normal xlg:h-[30px] '> At our Corporate Training events, we enable your team to align their work ethic with Christian values, leading to a harmonious and productive workplace.  </p>
        </div>
        <div className='text-white mx-2 mt-[1rem] '>
          <Link href={''} className='bg-[#655CFE] rounded-3xl p-3 '>Book Now</Link>
        </div>
      </section>
    </div>
  )
}

