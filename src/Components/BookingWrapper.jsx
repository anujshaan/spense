import React, { useState } from 'react'
import { HiOutlineCalendar, HiOutlineChevronDown, HiOutlineUserGroup } from 'react-icons/hi'

import Calendar from 'react-calendar'
import { dateFormatter } from '../utils/dateFormater'

const BookingWrapper = () => {

  const [isCheckIn, setIsCheckIn] = useState(false)
  const [isCheckOut, setIsCheckOut] = useState(false)

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const handleDateChange = (value,type) =>{
    if(type === 'checkIn'){
      setCheckIn(dateFormatter(value));
      setIsCheckIn(false);
      console.log('hello')
    }
    if(type === 'checkOut'){
      console.log('first')
      setCheckOut(dateFormatter(value));
      setIsCheckOut(false);
    }
  }

  return (
    <div className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] flex w-full justify-center'>
      <div className='inputButton relative rounded-tl-lg rounded-bl-lg' onClick={()=> setIsCheckIn(true)}>
        {
          checkIn ? (
              <>
              <HiOutlineCalendar className='w-5 h-5 text-gray-600' />
                <p>{checkIn}</p>
              <HiOutlineChevronDown className='text-sm'/>
              </>
          ) : (
            <>
            <HiOutlineCalendar className='w-5 h-5 text-gray-600' />
              <p>Check in</p>
            <HiOutlineChevronDown className='text-sm'/>
          </>
          )
        }
        {
          isCheckIn && (
            <div className='absolute bg-white p-4 rounded-xl w-96 top-12 left-0'>
              <Calendar onChange={(value)=> handleDateChange(value,'checkIn')} />
            </div>
          )
        }
      </div>
      <div className='inputButton relative border' onClick={()=> setIsCheckOut(true)}>
      {
          checkOut ? (
              <>
                <HiOutlineCalendar className='w-5 h-5 text-gray-600' />
                  <p>{checkOut}</p>
                <HiOutlineChevronDown className='text-sm'/>
              </>
          ) : (
            <>
              <HiOutlineCalendar className='w-5 h-5 text-gray-600' />
                <p>Check out</p>
              <HiOutlineChevronDown className='text-sm'/>
            </>
          )
        }
        {
          isCheckOut && (
            <div className='absolute bg-white p-4 rounded-xl w-96 top-12 left-0'>
              <Calendar onChange={(value)=> handleDateChange(value,'checkOut')} />
            </div>
          )
        }
      </div>
      <div className='inputButton rounded-tr-lg rounded-br-lg'>
        <HiOutlineUserGroup className='w-5 h-5 text-gray-600'/>
        <p>select members</p>
        <HiOutlineChevronDown className='text-sm'/>
      </div>
      <div className='inputButton bg-yellow-500 rounded-lg ml-4 text-gray-600 '>
        <p>Check Avalability</p>
      </div>
    </div>
  )
}

export default BookingWrapper