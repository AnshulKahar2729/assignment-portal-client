import React, { useState } from 'react'
import Sidebar from '../teacherFolder/TeacherSidebar';
import SectionContainer from '../teacherFolder/TeacherSectionContainer';

function TeacherLayoutPage() {

    const [section,setSection] = useState('Dashboard');


    return (
      <div className='sm:w-screen sm:h-screen sm:flex sm:flex-row flex flex-col w-full h-full'>
        <Sidebar section={section} setSection={setSection}/>
        <SectionContainer section={section}/>
    </div>
  )
}

export default TeacherLayoutPage