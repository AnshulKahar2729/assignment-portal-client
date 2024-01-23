import React from 'react';


function Deadline({ selectedDate,Assignments }) {
  const today = new Date();
  const pickedDate = selectedDate ? selectedDate.toLocaleDateString() : today.toLocaleDateString();

  return (
    <div className='h-[350px] w-full flex flex-col gap-4 text-[#245DE1] text-xl'>
      <div className="selected-date w-full ">
        <h3 className='w-full text-center border-b border-[#245de153] text-2xl'><b>Deadlines Date : <br/>{pickedDate}</b></h3>
      </div>
      <div className='hideScrollbar flex flex-col overflow-y-auto '>
        {Assignments.map((item, i) => (
          item.date === pickedDate ? (
            <div key={i} className='border-b grid gap-2 rounded-md p-3'>
              <p>{item.title}</p>
              <p>Posted on: {item.date}</p>
            </div>
          ) : (
            null
          )
        ))}
        {Assignments.every(item => item.date !== pickedDate) && (
          <p className='text-center text-gray-500'>No Assignments Found</p>
        )}
      </div>
    </div>
  );
}

export default Deadline;