import React from 'react';
import Dashboard from './StudentDashboard';
import Submission from './StudentSubmission';
import Faculty from './StudentFaculty';
import Courses from './StudentCourses';
import Discussion from './StudentDiscussion';
import Settings from './StudentSettings';


function StudentSectionContainer({section}) {

  

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
    <div className='bg-[#B1B3BB] w-4/5 h-full  px-5 overflow-hidden'>
      {selectSection()}
    </div>
  )
}

export default StudentSectionContainer;