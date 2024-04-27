import React from 'react'
import PR from '@/public/assets/prayer_room.png'
import RS from '@/public/assets/retreat_space.png'
import Walk from '@/public/assets/wof.png'
import Image from 'next/image'
import Link from "next/link"
import { HiMail } from "react-icons/hi";

const Resort = () => {
  return (
    <div className='container mx-auto w-full flex-col justify-center items-center my-10'>
      <div className=''>
        <h1 className='text-center text-2xl font-bold uppercase mb-4'>Christian Resort</h1>
        <p>
          Reconnect, refresh, and renew at Word Centre&apos;s Christian Resort, right in the heart of Lekki, but shut away from the noise. <br />
          Whether you seek a training space, group retreat space, private event, picnic space, a midday prayer room for midday or full day staycation, the Word CentreCentre&apos;s beautiful natural ambiance, and rustic setting, is ideal.
        </p>
      </div>

      <div className='my-10'>
        <p className='font-bold text-xl'>ADDRESS:</p>
        <address className='ml-2'>
          <div className=' gap-2 py-2'>
            <span className='font-semibold underline mr-2'>
              Visit us @:
            </span>
            Plot 5 Admiralty Road Lekki,  <br /> beside LG showroom towards Admiralty house.
          </div>
          <div className='flex gap-2'>
            <span className='font-semibold underline'>
              Send Us an Email @:
            </span>
            <Link href="mailto:familywordcentrelekki@gmail.com">familywordcentrelekki@gmail.com</Link>.
          </div>
        </address>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-8'>
        <div>
          <Image
            className='rounded-full'
            src={PR}
            alt='Prayer Room'
          />
        </div>
        <div>
          <Image
            className='rounded-full'
            src={RS}
            alt='Prayer Room'
          />
        </div>
        <div>
          <Image
            className='rounded-full'
            src={Walk}
            alt='Prayer Room'
          />
        </div>
      </div>
    </div>
  )
}

export default Resort