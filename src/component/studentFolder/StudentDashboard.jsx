import React, { useState } from 'react';
import Calendar from '../calendar/Calendar';
import Deadline from '../calendar/Deadline';


function StudentDashboard() {

  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='sm:w-full sm:h-full flex lg:flex-row flex-wrap py-4 overflow-scroll'>
      <div className='h-full w-full xl:w-1/2 flex flex-col gap-4 p-2'>
        <div className='w-full h-[29%] bg-white p-2 sm:p-0 flex justify-center items-center gap-7 rounded-lg shadow-lg text-xl overflow-y-auto'>
          <div className='w-28 h-28 bg-slate-400'>Profile</div>
          <div className=''>
            <p>Name : Pranav Hansraj Kale</p>
            <p>Branch : E&TC</p>
            <p>Year (Div) : 2nd Year</p>
            <p>Student Id : S190243109</p>
          </div>
        </div>
        <div className='w-full h-[62%] overflow-scroll bg-white rounded-lg p-8 '>
          <p className=' w-full text-center text-2xl font-serif pb-7'>Updates</p>
          <div className='flex flex-col gap-5 w-full text-xl overflow-hidden'>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full xl:w-1/2 flex flex-col gap-4 p-2'>
        <div className='w-full bg-white rounded-lg p-3'><Calendar onSelectDate={handleDateSelect}/></div>
        <div className='w-full h-[40%] bg-white rounded-lg p-3'><Deadline selectedDate={selectedDate}/></div>
      </div>
    </div>
  )
}

export default StudentDashboard