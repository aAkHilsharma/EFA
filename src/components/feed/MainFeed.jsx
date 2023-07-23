import React from 'react'
import TableDataRow from '../TableDataRow';
import {BsPin} from 'react-icons/bs'
import { FaLock } from 'react-icons/fa';

const MainFeed = () => {
    const data = [
        {
          topic: 'Welcome Enabler! Please read this before posting!',
          icon: BsPin,
          subTitle: 'Before you make a new topic or post, please read community guidelines. We aim to be the friendliest community for online mental health support.',
          category: '',
          users: 25,
          replies: 66,
          views: '15.1k',
          activity: '11d',
        },
        {
          topic: 'Current news and discussion',
          category: 'Mental Health',
          users: 3,
          replies: 31,
          views: '41.5k',
          activity: '13m',
        },
        {
          topic: 'Non-Urgent Emotional Help',
          category: 'Video',
          users: 2,
          replies: 252,
          views: '396',
          activity: '30m',
        },
        {
          topic: 'Other Ways of Getting Help',
          category: 'Mind',
          users: 3,
          replies: 207,
          views: '7.5k',
          activity: '41m',
        },
        {
          topic: 'How to help a person who self-harms!',
          category: 'Q&A',
          users: 1,
          replies: '2.3k',
          views: '2.0k',
          activity: '1h',
        },
        {
          topic: 'Feeling overwhelmed',
          category: 'Hope',
          users: 3,
          replies: 441,
          views: '3.1k',
          activity: '6h',
        },
        {
          topic: 'Should I Tell',
          category: 'Never Stop',
          users: 3,
          replies: '1.3k',
          views: '6.0k',
          activity: '7h',
        },
        {
          topic: 'If you need someone to talk to urgently and in confidence',
          icon: FaLock,
          category: 'Emotional Help',
          users: 3,
          replies: '5.7k',
          views: '33.6k',
          activity: '13h',
        },
        {
          topic: 'Post wierdest thing you own here!',
          category: 'Education',
          users: 3,
          replies: '236',
          views: '2.3k',
          activity: '10h',
        },
        {
          topic: 'Show me your awesome photography',
          category: 'Science',
          users: 3,
          replies: '3',
          views: '519',
          activity: '2d',
        },
        {
          topic: 'Prevention Strategies',
          category: 'Random',
          users: 3,
          replies: '60',
          views: '891', 
          activity: '1h',
        },
        {
          topic: 'Live Music',
          category: 'Music',
          users: 2,
          replies: '587',
          views: '3.8k', 
          activity: '3d',
        },
        {
          topic: 'Racing Thoughts',
          category: 'Entertainment',
          users: 3,
          replies: '628',
          views: '997', 
          activity: '1h',
        },
        {
          topic: 'Post your artwork!',
          category: 'Art',
          users: 2,
          replies: '147',
          views: '397', 
          activity: '3h',
        },
        {
          topic: 'How to feel normal?',
          category: 'Upset',
          users: 3,
          replies: '274',
          views: '2.9k', 
          activity: '1d',
        },
        {
          topic: 'Tell me about your recent dream',
          category: 'Dreams',
          users: 2,
          replies: '0',
          views: '42', 
          activity: '1d',
        },
        {
          topic: 'A thread in which you tell users to go to sleep',
          category: 'Social',
          users: 3,
          replies: '129',
          views: '752', 
          activity: '19h',
        },
        {
          topic: "What's everyone listening?",
          category: 'Random',
          users: 3,
          replies: '305',
          views: '2.1k', 
          activity: '6h',
        },
      ];
    return (
        <div className='w-[85vw] mx-auto py-5'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr 1fr',
          gap: '4px',
          padding: '8px',
          alignItems: 'center',
        }}
      >
        <div className='text-lg font-medium'>Topic</div>
        <div className='text-lg font-medium'>Category</div>
        <div className='text-lg font-medium'>Users</div>
        <div className='text-lg font-medium'>Replies</div>
        <div className='text-lg font-medium'>Views</div>
        <div className='text-lg font-medium'>Activity</div>
      </div>
      <div>
        {data.map((rowData, index) => (
          <TableDataRow key={index} {...rowData} />
        ))}
      </div>
    </div>

    )
}

export default MainFeed