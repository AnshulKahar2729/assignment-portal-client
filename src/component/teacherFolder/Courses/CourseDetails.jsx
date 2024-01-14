import React, { useEffect, useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";

function CourseDetails({courseDirectId,setCourseDirectId,Data,setFilePage}) {

  const [courseName,setCourseName] = useState('');
  // const [courseImg,setCourseImg] = useState('');

  function handleBackBtn () {
    setCourseDirectId(null);
  }

  useEffect(() => {
    const selectedCourse = Data.find(course => course.id === courseDirectId);
    if(selectedCourse)
    {
      setCourseName(selectedCourse.courseName);
      // setCourseImg(selectedCourse.backgroundImage);
    }
  },[Data,courseDirectId])

  function handleClick (e) {
    e.preventDefault();
    setFilePage(e.target.value)
  }

  

  

  return (
    <div className=' w-full h-full py-5 flex flex-col gap-10 text-3xl '>
      
      <h1 className='w-full h-20 bg-white shadow-md flex  justify-center items-center font-semibold'>Course Name : {courseName}</h1>
      
      <button className='w-[95%] shadow-md py-5 px-5 rounded-lg bg-blue-200 hover:bg-blue-300 cursor-pointer' onClick={handleClick} value='Assignment'>Assignment</button>
      <button className='w-[95%] shadow-md py-5 px-5 rounded-lg bg-blue-200 hover:bg-blue-300 cursor-pointer' onClick={handleClick} value='Notes/Resources'>Notes/Resources</button>
      <button className='w-[95%] shadow-md py-5 px-5 rounded-lg bg-blue-200 hover:bg-blue-300 cursor-pointer' onClick={handleClick} value='Question Bank'>Question Bank</button>
      <button className='w-[95%] shadow-md py-5 px-5 rounded-lg bg-blue-200 hover:bg-blue-300 cursor-pointer' onClick={handleClick} value='Activities'>Activities</button>
      
      <div className='w-[52%] gap-10 flex justify-between text-2xl font-normal text-white'>
      <button
                  // style={design1(section === "Discussion")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-fit "
                  value="Discussion"
                  // onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <BsFillPeopleFill />
                  </div> 
                  'Discussion'
                </button>
        <button className='w-fit' onClick={handleBackBtn}>Back</button>
      </div>
    </div>
  );
}

export default CourseDetails;
