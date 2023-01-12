import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-16 py-2 shadow-lg'>
      <h1 className='logo text-4xl font-logo py-2'>Sample Logo</h1>
      <div className='text-gray-600'>
        <span>Need help ? </span>
        <span>Call 8107344782</span>
      </div>
    </div>
  )
}

export default Header