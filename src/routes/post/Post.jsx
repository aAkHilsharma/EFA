import React, { useState } from 'react'
import Modal from '../../components/Modal';
import Post from '../../components/Post';

const PostPage = () => {
    const [open, setOpen] = useState(true);
    const onClose = () => {
      setOpen(!open);
    }  
    const body = <div>
      <img className='h-40 pb-8 mx-auto border-b-2 border-gray-200' src='/images/EFA_Registered Logo.png' alt='body_image' />
    </div>
    const footer = <div className='flex flex-col items-center justify-center pb-5'>
      <p className='font-semibold'>Great Thread</p>
      <p className='text-sm text-neutral-500'>Creates a popular thread</p>
    </div>

    return (
        <div>
            <Post />
            <Modal title="Congratulations" subtitle="You have earned a badge!" isOpen={open} onClose={onClose} body={body} footer={footer} />
        </div>
    )
}

export default PostPage;