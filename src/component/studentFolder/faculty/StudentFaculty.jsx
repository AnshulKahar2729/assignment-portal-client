import React, { useEffect, useState } from 'react';
import FacultyBar from './FacultyBar';


function StudentFaculty() {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }

  },[]);


  return (
    <>
      <div className='flex flex-col sm:h-full w-full p-2 overflow-hidden'>
        <div className='w-full h-20 pl-14 pr-24 flex items-center justify-between bg-[#245DE1] rounded-t-lg'>
          <p className='text-white text-lg font-semibold'>Photo</p>
          <p className='text-white text-lg font-semibold'>Faculty</p>
          {
            (windowWidth >= 800) && (
              <p className='text-white text-lg font-semibold'>Subject</p> 
            )
          }
        </div>
        <div className='hideScrollbar flex flex-col w-full h-full rounded-b-lg overflow-y-scroll bg-white'>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
          <FacultyBar windowWidth={windowWidth}/>
        </div>
      </div>
    </>
  )
}

export default StudentFaculty