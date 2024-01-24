import React from 'react';

function RecentPosts({ selectedDate, Posts }) {
  const today = new Date();
  const pickedDate = selectedDate ? selectedDate.toLocaleDateString() : today.toLocaleDateString();

  return (
    <div className='h-[350px] w-full flex flex-col gap-4 text-[#245DE1] text-xl'>
      <div className="selected-date w-full ">
        <h3 className='w-full text-center border-b border-[#245de153] text-2xl'><b>Recent Posts : <br/>{pickedDate}</b></h3>
      </div>
      <div className='hideScrollbar flex flex-col overflow-y-auto '>
        {Posts.map((item, i) => {
          const postDate = new Date(item.date); // Parse the date string to a Date object
          const formattedDate = postDate.toLocaleDateString(); // Format the date as per locale

          return (
            formattedDate === pickedDate ? (
              <div key={i} className='border-b grid gap-2 rounded-md p-3'>
                <p>{item.title}</p>
                <p>Posted on: {formattedDate}</p>
              </div>
            ) : (
              null
            )
          );
        })}
        {Posts.every(item => {
          const postDate = new Date(item.date);
          const formattedDate = postDate.toLocaleDateString();
          return formattedDate !== pickedDate
        }) && (
          <p className='text-center text-gray-500'>No Posts Found</p>
        )}
      </div>
    </div>
  );
}

export default RecentPosts;