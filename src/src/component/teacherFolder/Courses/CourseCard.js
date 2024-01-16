import React from 'react';
import ProfImg from '../../../assets/ProfImg.png';

function CourseCard({course,setSelectedCourseID}) 
{

  function handleClick (e) {
    e.preventDefault();
    setSelectedCourseID(course.id)
  }


  return (
    <>
      {course ? (
        <div
          onClick={handleClick}
          className="relative w-72 h-72 rounded-lg flex flex-col cursor-pointer overflow-hidden bg-white shadow-lg border"
        >
          <div className='absolute w-full bg-[#245DE1] text-white p-3 shadow-lg'>
            <h1 className='text-xl font-semibold'>{course.courseName}</h1>
            <h3 className='text-sm'>{course.className} {course.divisionName}</h3>
            <h4 className='text-sm'>Prof. Name</h4>
          </div>
            <img className='sticky top-11 left-40 right-0 w-32 h-28 ' src={ProfImg}  alt='ProfImg'/>
          <div></div>
        </div>
      ) : null     /* (!course || Object.keys(course).length === 0 ? <div>No courses Found</div> : null) */
    }
    </>
  );
}

export default CourseCard;
