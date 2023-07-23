import React from 'react'
import { BiSearch, BiSolidUserCircle } from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import {BsChevronDown} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className="border-b-[1px]">
                <div className="flex flex-row items-center justify-center space-x-32 md:gap-0 h-20">
                    <img 
                        alt='logo'
                        src='/images/EFA_Registered Logo.png'
                        className='w-28'
                    />
                    <div className='flex gap-2 items-center border-x-2 border-x-gray-300 p-4 h-[100%]'>
                        <BiSearch className='text-4xl text-gray-500' />
                        <input type='text' className='ml-4 focus:outline-none' />
                        <p>Topics</p>
                        <BsChevronDown className='text-lg text-gray-400' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className=''>Latest Topics</p>
                        <AiOutlineMenu className='text-4xl text-gray-400' />
                        <IoNotificationsOutline className='text-4xl text-gray-400' />
                        <BiSolidUserCircle className='text-4xl text-gray-400' />
                        <p className='text-sm text-gray-400'>akhil Sharma</p>
                        <BsChevronDown className='text-lg text-gray-400' />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar