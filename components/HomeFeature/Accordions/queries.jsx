import React from 'react'
import { Accordion } from "@/components/HomeFeature/Accordions/accordion"
import { Review } from '../review';


const accordionItems = [
  {
    title: 'Are children of all ages welcome? ',
    content: 'Absolutely! Our children bible class welcome all kid, from pre-school to teenagers. We have specialize curricula for different age group, all intended to make christianity fun and engaging',
  },
  {
    title: 'Are children of all ages welcome? ',
    content: 'Content ',
  },
  {
    title: 'Are children of all ages welcome? ',
    content: 'Content ',
  },
  {
    title: 'Are children of all ages welcome? ',
    content: 'Content ',
  },
  {
    title: 'Are children of all ages welcome? ',
    content: 'Content ',
  },

];

export const Queries = () => {
  return (
    <div >
      {/* <div>
        <Review />
      </div> */}

      <div className='container mx-auto md:flex w-full'>
        {/* Queries Text */}
        <section className=' md:w-[50%] p-4 '>
          <div className='flex flex-col gap-5 mx-6'>
            <h5 className='text-[35px] font-semibold '>Faith-Filled Queries </h5>
            <p className=' '>Got questions? We have answers. Check out our frequently asked questions for some faith-filled clarity. </p>
          </div>
        </section>

        {/* Queries questions and answer */}
        <section className='md:w-[50%]'>
          <div className="container mx-auto p-4">
            <Accordion items={accordionItems} />
          </div>
        </section>
      </div>
    </div>
  )
}
