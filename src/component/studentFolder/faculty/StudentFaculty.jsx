import React from 'react';
import FacultyBar from './FacultyBar';


function StudentFaculty() {
  return (
    <>
      <div className='flex md:flex-row lg:flex-row flex-col'>
        <div className='grid grid-cols-1'>
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