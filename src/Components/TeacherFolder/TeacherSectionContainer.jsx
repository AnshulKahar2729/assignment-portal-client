import React from 'react';
import Dashboard from './TeacherDashboard';
import Submission from './TeacherSubmission';
import Faculty from './TeacherFaculty';
import Courses from './TeacherCourses';
import Discussion from './TeacherDiscussion';
import Settings from './TeacherSettings';


function TeacherSectionContainer({section}) {

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
           return <Courses/>
        case 'Faculty' :
          return <Faculty/>
        case 'Settings' :
          return <Settings/>
        default :
          return <Dashboard/>
          
      }
    }

  return (
    <div className='bg-[#B1B3BB] h-full  px-5 py-3 border'>
      {selectSection()}
    </div>
  )
}

export default TeacherSectionContainer;