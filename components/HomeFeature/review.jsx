import React from 'react'
import Image from "next/image"
import { ReviewSlider } from './reviewSlider'
import Feedback from "@/public/assets/feedback.png"

export const Review = () => {
  return (
    <div className='container mx-auto lg:flex border rounded-lg shadow-2xl'>
      <section className='flex-1 my-6 mx-8 items-center justify-center '>
        <div className=''>
          <h2 className=' text-[30px] font-semibold '>Members Sharing Their Growth Stories </h2>
          <p>Hear words from our community members about their journey, growth, and transformation with Teacher Nneka.</p>
        </div>
        <div className=' mx-6'>
          <Image src={Feedback} alt={""} className="m-3" />
        </div>
      </section>
      <section className='my-2 mx-8 flex-1 shadow-lg rounded-lg h-[70dvh]'>
        <div className='py-6 px-8 '>
          <ReviewSlider />
        </div>
      </section>
    </div>
  )
}
