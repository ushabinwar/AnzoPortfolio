import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className=' fixed w-full  py-16 px-14  text-white  flex justify-end  items-center z-10 '>
        <button className='bg-black text-white px-7 py-1 hover:bg-gray-400 text-lg border-4 border-white rounded-3xl'>Hire Me</button>
        <i className="ri-more-2-fill text-2xl ml-3"></i>
        
    </div>
  )
}

export default Header