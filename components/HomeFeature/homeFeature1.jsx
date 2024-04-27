import Image from 'next/image'
import Link from 'next/link'
import Feature_1 from '@/public/assets/feature_img1.jpg'
import React from 'react'

export const HomeFeature1 = () => {
  return (
    <div className='container mx-auto w-full flex flex-col-reverse lg:flex-row py-[2rem] gap-4 '>
      <section className='mx-7 flex flex-col justify-center '>
        <div className='mb-7'>
          <h2 className=' font-bold text-[20px] md:text-[25px] lg:text-[38px] '>Children Bible School: Making Faith Fun </h2>
          <p className=' text-[12px] md:text-[16px] font-normal xlg:h-[30px] '> Join our Children&apos;s Bible Class, where faith comes alive through interactive learning and community engagement. </p>
        </div>
        <div className='text-white mx-2 mt-[1rem] '>
          <Link href={''} className='bg-[#655CFE] rounded-3xl p-3 '>Enrol Now</Link>
        </div>
      </section>
      <section className=''>
        <Image
          className=' rounded-3xl'
          src={Feature_1}
          alt=''
        />

      </section>
    </div>
  )
}

