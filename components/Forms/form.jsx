import React from 'react'

const Form = () => {
  return (
    <form className=' '>
      <input className='w-[50%] rounded-xl h-[40px] p-[10px] mr-[2.5rem] bg-[#f5f5f5] ' type="text " placeholder='Enter your email' />
      <button className='rounded-3xl text-white h-[40px] w-[100px] bg-[#655CFE] border ' type="submit">Join Us</button>
    </form>
  )
}

export default Form