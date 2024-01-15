import React from 'react';
import FacultyBar from './FacultyBar';


function StudentFaculty() {
  return (
    <>
      <div className='flex flex-col h-full overflow-y-auto w-full py-4 overflow-hidden'>
        <div className='w-full h-20 pl-14 pr-24 flex items-center justify-between bg-[#245DE1] rounded-t-lg'>
          <p className='text-white text-lg font-semibold'>Photo</p>
          <p className='text-white text-lg font-semibold'>Faculty</p>
          <p className='text-white text-lg font-semibold'>Subject</p> 
        </div>
        <div className='hideScrollbar flex flex-col w-full h-[590px] rounded-b-lg overflow-y-scroll'>
          <FacultyBar/>
          <FacultyBar/>
          <FacultyBar/>
          <FacultyBar/>
          <FacultyBar/>
          <FacultyBar/>
          <FacultyBar/>
        </div>
      </div>
    </>
  )
}

export default StudentFaculty