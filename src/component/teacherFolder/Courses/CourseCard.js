import React from 'react';

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
          className="w-64 h-60 p-2 pr-20 pb-20 rounded-lg flex flex-col bg-transparent text-white cursor-pointer"
          style={{
            backgroundImage: `url(${course.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>{course.courseName}</h1>
          <h3>{course.className}</h3>
          <h4>{course.divisionName}</h4>
        </div>
      ) : null     /* (!course || Object.keys(course).length === 0 ? <div>No courses Found</div> : null) */
    }
    </>
  );
}

export default CourseCard;
