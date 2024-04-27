"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion as m } from 'framer-motion'
import Confetti from 'react-confetti'


const Success = () => {
  const [pieces, setPieces] = useState(200)

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0)
    }, 3000)
  }

  useEffect(() => {
    stopConfetti()
  }, [])

  const router = useRouter()

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0 }}
      className='success'>
      <div className='container flex flex-col items-center justify-center bg-white text-gray-700 p-16 rounded-lg h-[100vh] '>
        <h1 className='text-3xl pb-4'>Thanks for the email, {router.query.name} </h1>
        <p className='text-lg text-gray-500'>You will recieved a response from our team{router.query.email}.</p>
      </div>
      <Confetti numberOfPieces={pieces} />
    </m.div>
  )
}

export default Success