import React, { useEffect, useState } from 'react';
import Dashboard from './TeacherDashboard';
import Submission from './TeacherSubmission';
import Faculty from './TeacherFaculty';
import Courses from './Courses/TeacherCourses';
import Discussion from './TeacherDiscussion';
import Settings from './TeacherSettings';
import CourseDetails from './Courses/CourseDetails';
import { Data } from './Datas/Data';


function TeacherSectionContainer({section}) {

  const [courseDirectId,setCourseDirectId] = useState(null);
  const [filePage,setFilePage] = useState('');


  useEffect(() => {
    console.log("courseDirectId changed:", courseDirectId);
  }, [courseDirectId]);

  useEffect(() => {
    console.log("filePage changed:", filePage);
  },[filePage])


    function selectSection()
    {
      switch(section) {
        case 'Dashboard' :
          return <Dashboard/>
        case 'Submission' :
          return <Submission/>
        case 'Discussion' :
           return <Discussion/>





        case 'Courses' :
          return courseDirectId === null ? (
            <Courses setCourseDirectId={setCourseDirectId} Data={Data} />
          ) : (
            <CourseDetails courseDirectId={courseDirectId} setCourseDirectId={setCourseDirectId} Data={Data} setFilePage={setFilePage}/>
          );
        case 'Faculty' :
          return <Faculty/>
        case 'Settings' :
          return <Settings/>
        default :
          return <Dashboard/>
          
      }
    }

  return (
    <div className='bg-[#d4ddff] w-[100%] sm:w-4/5 h-full  px-5  m-auto sm:m-0'>
      {selectSection()}
    </div>
  )
}

export default TeacherSectionContainer;






