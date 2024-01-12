import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { CgProfile } from "react-icons/cg";



function TeacherCourses({setCourseDirectId,Data}) {

  const [courses,setCourses] = useState(Data);
  const [selectedCourseID,setSelectedCourseID] = useState(null);

  function exchangeValue () {
    setCourseDirectId(selectedCourseID);
  }

  useEffect(() => {
    setCourseDirectId(selectedCourseID);
  }, [selectedCourseID]);


  return (
    <div className=' sm:w-full sm:h-full  py-4 overflow-y-scroll gap-10 flex flex-col'>
      <div className='h-56'>
      <div className='w-full text-2xl flex justify-between items-center py-4 px-7 bg-slate-400 rounded-lg'>
        <h2>Course</h2>
        <div className='flex items-center gap-3 '>
          <p className=''>Name of Professor</p>
          <CgProfile className="text-5xl"/>
        </div>
      </div>
      </div>
      <div className='grid grid-cols-3 gap-32 m-auto'>
          {
            courses.map((course) => <CourseCard key={course.id} setSelectedCourseID={setSelectedCourseID} course={course} />)
          }
      </div>
    </div>
  )
}

export default TeacherCourses