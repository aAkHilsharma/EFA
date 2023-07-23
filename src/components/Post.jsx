import React from 'react'

import {BiUpvote, BiDownvote, BiShare } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';

const Post = () => {
  return (
    <div className='w-[85vw] mx-auto h-[70vh]'>
        <div className='flex flex-col mb-4'>
            <h1 className='py-8 text-xl font-semibold'>What are your best tips on how to deal with fear of abandonment?</h1>
            <div className='flex items-center space-x-6'>
                <p className='text-gray-400'>Mind</p>
                <div className='flex gap-2'>
                    <p className='text-white px-2 bg-blue-500'>hope</p>
                    <p className='text-white px-2 bg-blue-500'>help</p>
                </div>
            </div>
        </div>
        <div className='bg-white h-[45vh] p-9'>
            <div className='relative py-7 border-b-2 border-gray-200'>
                <img src='/images/profile.png' alt='profile img' className='h-14 absolute' />
                <div className='flex flex-col space-y-4 pt-4 w-[50%] ml-[100px]'>
                    <h1>BenjaMin Caesar</h1>
                    <p className='text-neutral-300'>I can't work or do anything due to this feeling of fear of abandonment</p>
                    <div className='w-[500px] bg-purple-500 h-[200px]'></div>
                </div>
            </div>
            <div className='flex p-4 space-x-10 items-center'>
                <BiUpvote className='text-gray-500 text-2xl' />
                <BiDownvote className='text-gray-500 text-2xl' />
                <BsSuitHeart className='text-gray-500 text-2xl' />
                <BiShare className='text-gray-500 text-2xl' />
            </div>
        </div>
    </div>
  )
}

export default Post