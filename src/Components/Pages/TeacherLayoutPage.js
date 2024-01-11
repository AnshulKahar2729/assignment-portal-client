import React, { useState } from 'react'
import Sidebar from '../TeacherFolder/TeacherSidebar';
import SectionContainer from '../TeacherFolder/TeacherSectionContainer';

function TeacherLayoutPage() {

    const [section,setSection] = useState('Dashboard');


    return (
      <div className='w-full h-screen sm:flex sm:flex-row flex flex-col'>
          <Sidebar section={section} setSection={setSection}/>
          <SectionContainer section={section}/>
          
      </div>
  )
}

export default TeacherLayoutPage