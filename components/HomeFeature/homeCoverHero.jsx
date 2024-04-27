
import React from 'react'
// import Form from './form';
import Link from 'next/link';
import Home from '@/public/assets/home.jpg'
import Image from 'next/image';

export const HomeCoverHero = () => {
  // const cloudname = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // const publicid = process.env.NEXT_PUBLIC_ID;
  return (
    <div className='container mx-auto w-full flex flex-col-reverse items-center justify-between lg:flex-row py-[2rem] gap-4'>
      <section className='mx-7 flex flex-col justify-center'>
        <div className='text-start '>
          <div className='my-2 '>
            <h1 className=' font-bold text-[20px] md:text-[25px] lg:text-[50px] '>Welcome to Our Christian Community</h1>
            <p className=' text-[12px] md:text-[16px] font-normal xlg:h-[30px] '>Join Teacher Nneka, a nurturing Christian organization. Discover our community, learn the Word, and grow in Faith. </p>
          </div>
          <div>
            {/* <Form /> */}
          </div>
        </div>
      </section >

      <section className=' mx-7'>
        <Image
          className=' max-w-full h-auto rounded-3xl '
          src={Home}
          alt=''
        />
      </section>
    </div>
  )
}

