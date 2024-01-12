import React, { useEffect, useState } from 'react';

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
      
      <div className='w-full flex justify-center text-2xl font-normal text-white'>
        <button className='w-fit' onClick={handleBackBtn}>Back</button>
      </div>
    </div>
  );
}

export default CourseDetails;
