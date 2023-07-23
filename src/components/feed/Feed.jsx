import { useNavigate } from 'react-router-dom';
import {BsChevronDown} from 'react-icons/bs';

const Feed = () => {
    const navigate = useNavigate();
    const hanldeClick = () => {
        navigate('/home/post')
    }
    return (
        <div className='flex items-center pt-24 w-[85vw] border-b-2 mx-auto gap-5'>
            <div className='flex gap-5 pb-5'>
                <div className='bg-gray-300 flex items-center px-4 gap-2'>
                <p className='text-sm text-black py-4 hover:cursor-not-allowed'>All Categories</p>
                <BsChevronDown className='text-lg text-black' />
                </div>
                <div className='bg-gray-300 flex items-center justify-center px-4 gap-2'>
                <p className='text-sm text-black hover:cursor-not-allowed'>Tags</p>
                <BsChevronDown className='text-lg text-black' />
                </div>
                <div className='flex items-center space-x-8'>
                    <div onClick={hanldeClick} className='text-gray-400 cursor-pointer border-b-2 border-b-yellow-400'>Latest</div>
                    <div className='text-gray-400 cursor-not-allowed'>Unread</div>
                    <div className='text-gray-400 cursor-not-allowed'>Rising</div>
                    <div className='text-gray-400 cursor-not-allowed'>Most Liked</div>
                    <div className='text-gray-400 cursor-not-allowed'>Follow Feed</div>
                </div>
            </div>
        </div>
    )
}

export default Feed