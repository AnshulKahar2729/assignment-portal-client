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
      
    <h1 className='w-full h-20 text-[#245DE1] border-b border-[#245DE1] flex  justify-center items-center font-semibold'>Course Name : {courseName}</h1>
      
    <div className='w-full justify-items-center gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:my-20'>
      <button className='w-[75%] h-28 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-start sm:justify-self-end' onClick={handleClick} value='Assignment'>Assignment</button>
      <button className='w-[75%] h-28 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-end sm:justify-self-start' onClick={handleClick} value='Notes/Resources'>Notes/<br/>Resources</button>
      <button className='w-[75%] h-28 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-start sm:justify-self-end' onClick={handleClick} value='Question Bank'>Question Bank</button>
      <button className='w-[75%] h-28 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-end sm:justify-self-start' onClick={handleClick} value='Activities'>Activities</button>
    </div>


      <div className='w-full flex justify-center text-2xl font-normal'>
      {/* <button
          // style={design1(section === "Discussion")}
          className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-fit "
          value="Discussion"
          // onClick={handleClick}
        >
          <div className='text-4xl'>
          <BsFillPeopleFill />
          </div> 
          'Discussion'
      </button> */}
        <button className='w-fit py-2 px-6' onClick={handleBackBtn}>Back</button>
      </div>
    </div>
  );
}

export default CourseDetails;
