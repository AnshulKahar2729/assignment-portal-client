import React from 'react';

function StudentDashboard() {
  return (
    <div className='flex flex-wrap gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='bg-white p-4 flex gap-3 rounded-lg shadow-lg'>
          <div className='px-7 py-3 bg-slate-400'>Profile</div>
          <div className=''>
            <p>Name : Pranav Hansraj Kale</p>
            <p>Branch : E&TC</p>
            <p>Year (Div) : 2nd Year</p>
            <p>Student Id : S190243109</p>
          </div>
        </div>
        <div className='bg-white rounded-lg p-3 gap-5'>
          <p className=' w-full text-center'>Updates</p>
          <div className='flex flex-col gap-2 w-full'>
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
      <div className='flex flex-col gap-4'>
        <div className='bg-white rounded-lg p-3'>d</div>
        <div className='bg-white rounded-lg p-3'>d</div>
      </div>
    </div>
  )
}

export default StudentDashboard