import React, { useState } from 'react'
import Sidebar from '../teacherFolder/TeacherSidebar';
import SectionContainer from '../teacherFolder/TeacherSectionContainer';

function TeacherLayoutPage() {

    const [section,setSection] = useState('Dashboard');


    return (
      <div className='w-full h-full sm:flex sm:flex-row flex flex-col'>
          <Sidebar section={section} setSection={setSection}/>
          <SectionContainer section={section}/>
          
      </div>
  )
}

export default TeacherLayoutPage