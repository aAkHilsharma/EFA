import React from 'react'

const SignUpHeader = () => {
  return (
    <div className='flex justify-between'>
        <div></div>
        <div className='flex gap-2 justify-center items-center'>
            <p className='text-gray-400'>Already have an account?</p>
            <button className='bg-gray-200 border-2 py-2 px-4'>Sign In</button>
        </div>
    </div>
  )
}

export default SignUpHeader