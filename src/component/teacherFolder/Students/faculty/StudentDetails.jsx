import React, { useEffect, useState } from 'react';
import FacultyBar from './FacultyBar';
import { Link } from 'react-router-dom';


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
          <p className='text-white text-lg font-semibold'>Students</p>
          {
            (windowWidth >= 800) && (
              <p className='text-white text-lg font-semibold'>Subject</p> 
            )
          }
        </div>
        <div className='hideScrollbar flex flex-col w-full h-full rounded-b-lg overflow-y-scroll bg-white'>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
          <Link to='/assignments/studentdetails/studentAssignmentInfo'><FacultyBar windowWidth={windowWidth}/></Link>
        </div>
        <Link className='w-full flex items-center justify-center' to='/assignments'><button className='rounded-md'>Back</button></Link>
      </div>
    </>
  )
}

export default StudentFaculty