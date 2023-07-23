import React from 'react';

const TableDataRow = ({ topic, subTitle ,category, users, replies, views, activity, icon: Icon }) => {
    const categoryColors = {
        none: '#ffb6c1',
        'Mental Health': '#FFF',
        'Video' : '#d2d4d2',
        'Mind': '#FFF',
        'Q&A': '#d2d4d2',
        'Hope': '#FFF',
        'Never Stop' : '#d2d4d2',       
        'Emotional Help' : '#FFF',       
        'Education' : '#d2d4d2',       
        'Science' : '#FFF',       
        'Random' : '#d2d4d2',       
        'Music' : '#FFF',       
        'Entertainment' : '#d2d4d2',
        'Art': '#FFF',
        'Upset': '#d2d4d2',
        'Dreams': '#FFF',
        'Social': '#d2d4d2',       
    };

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr 1fr',
          gap: '4px',
          backgroundColor: category? categoryColors[category] : '#ffb6c1' ,
          padding: '8px',
          alignItems: 'center',
        }}
      >
        <div className='p-2'>{
          subTitle || Icon ? (
          <>
              <p className='font-semibold flex items-center mb-2 gap-2'>
                {Icon ? <span className='text-gray-500'><Icon /></span> : ''}
                {topic}
              </p>
              <p className='text-gray-500'>{subTitle ? subTitle : ''}</p>
            </>
          ) : (
            <>{topic}</>
          )}

        </div>
        <div className='p-2 text-gray-500'>{category}</div>
        <div className='p-2'>{users}</div>
        <div className='p-2'>{replies}</div>
        <div className='p-2 text-gray-500'>{views}</div>
        <div className='p-2 text-gray-500'>{activity}</div>
      </div>
  );
};

export default TableDataRow;
