import React, { useEffect, useState } from 'react';
import Dashboard from './StudentDashboard';
import Submission from './submission/StudentSubmission';
import Faculty from './faculty/StudentFaculty';
import Courses from './Courses/StudentCourses';
import Discussion from './StudentDiscussion';
import Settings from './StudentSettings';
import FilesPage from './Courses/FilesPage';
import CourseDetails from './Courses/CourseDetails';
import { Data } from './datas/Data';
import Assignments from './Assignments';
import UploadPage from './submission/UploadPage';


function StudentSectionContainer({section}) {

  const [courseDirectId,setCourseDirectId] = useState(null);
  const [filePage,setFilePage] = useState(null);
  // const [upload,setUpload] = useState(false);
  const [file,setFile] = useState([]);
  const [openUploadPage,setOpenUploadPage] = useState(false);


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
          return (openUploadPage === true) ? <UploadPage setOpenUploadPage={setOpenUploadPage}/> : <Submission setOpenUploadPage={setOpenUploadPage}/>
          // return <Submission setOpenUploadPage={setOpenUploadPage}/>

        case 'Discussion' :
          return <Discussion/>
        case 'Assignments' :
          return <Assignments/>



        case 'Courses' :
         return   (courseDirectId === null && filePage === null) ? <Courses setCourseDirectId={setCourseDirectId} Data={Data} /> :
                  (courseDirectId !== null && filePage === null) ? <CourseDetails courseDirectId={courseDirectId} setCourseDirectId={setCourseDirectId} Data={Data} setFilePage={setFilePage}/> :
                  (filePage !== null) ? <FilesPage setFilePage={setFilePage} filePage={filePage} Data={Data} courseDirectId={courseDirectId}  file={file}/> : "Not Found !!!"
  



        case 'Faculty' :
          return <Faculty/>
        case 'Settings' :
          return <Settings/>
        default :
          return <Dashboard/>
      }
    }

  return (
    // <div className='bg-[#B1B3BB] w-4/5 h-full  px-5  overflow-hidden '>
    // <div className='bg-[#d4ddff] w-[100%] sm:w-4/5 h-full  px-5  m-auto sm:m-0'>
    <div className='w-[100%] sm:w-5/6 h-full px-1 sm:px-5  m-auto sm:m-0'>
      {selectSection()}
    </div>
  )
}

export default StudentSectionContainer;