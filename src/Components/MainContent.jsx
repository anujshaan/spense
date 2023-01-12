import React from 'react'
import HeroImg from '../assets/HeroImg.jpg'
import BookingWrapper from './BookingWrapper'

const MainContent = () => {
  return (
    <div className='relative'>
      <div className='h-[90vh] w-full bg-black'>
        <img src={HeroImg} alt="" className='h-full w-full object-cover opacity-30'/>
      </div>
      <BookingWrapper/>
    </div>
  )
}

export default MainContent