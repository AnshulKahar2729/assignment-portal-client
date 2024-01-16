import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { CgProfile } from "react-icons/cg";
import StudentImg from '../../../assets/ProfImg.png';



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
      <div className='w-full text-xl sm:text-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center px-7 bg-[#245DE1] text-white rounded-lg'>
        <h2>Courses : </h2>
        <div className='flex w-full justify-between sm:w-fit items-center sm:gap-3 '>
          <p className=''>Name of Student</p>
          <img className='w-28' src={StudentImg} alt='StudentImg'/>
          {/* <CgProfile className="text-5xl"/> */}
        </div>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 xl:gap-28 m-auto'>
          {
            courses.map((course) => <CourseCard key={course.id} setSelectedCourseID={setSelectedCourseID} course={course} />)
          }
      </div>
    </div>
  )
}

export default TeacherCourses