import React from 'react';
import Image from 'next/image';
import Image1 from '@/public/assets/training/parenting.png'

const BibleBaseParenting = () => {
  return (
    <div className='md:container md:mx-auto flex-col justify-center items-center px-2'>
      <h1 className='py-10 font-bold text-xl text-center '>BIBLE-BASED PARENTING TRAINING</h1>
      <div className='pb-10 md:flex justify-around gap-4'>
        <div className='w-full p-2 '>
          <Image className='w-full rounded' src={Image1} alt={''} />
        </div>
        <div className='p-5 shadow-2xl'>
          <p className='mb-10'>
            Bible Based parenting, an arm of The Millennium parenting program, is a Christian faith
            based parenting program for parents who want to raise spiritually-sound Children.
            This training is ideal for churches and spiritually-minded organizations.
            <br />
            <br />
            The Bible based parenting program has been running within the millennial parenting
            training for over a decade and remains valid in every generation. It provides
            parents with not only the knowledge and skills to raise their children in accordance
            to Biblical teachings but also with tangible resources that have  been proven to
            leave impact on families.
          </p>
          <ul className='mb-10'>
            <h3 className='font-semibold my-2'>Our commitment</h3>
            <li>With this program you won’t only raise morally sound children, but also raise a secular and a spiritual giant. </li>
          </ul>
          <ul>
            <h3 className='font-semibold my-2'>Want to raise exceptional children? </h3>
            <li>Bring this program to your church, group or gathering. </li>
          </ul>
        </div>
      </div>
      <div className='my-6'>
        <p>
          For a more robust training package you can select a mix of the Millennium parenting training and the
          Bible Based parenting training, depending on the needs of your audience.
        </p>
      </div>

    </div>
  )
}

export default BibleBaseParenting