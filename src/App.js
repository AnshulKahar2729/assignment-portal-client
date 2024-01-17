import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './component/pages/landingPage/IndexPage';
import LoginPage from './component/pages/Loginpage/LoginPage';
import SignUpPage from './component/pages/SignUpPage';
import TestApi from './testapi/TestApi';
import Header from './component/otherComponents/Header';
import Sidebar from './component/otherComponents/Sidebar';

import StudentDashboard from './component/studentFolder/StudentDashboard';
import StudentSubmission from './component/studentFolder/submission/StudentSubmission';
import Assignments from './component/studentFolder/Assignments';
import StudentCourses from './component/studentFolder/Courses/StudentCourses';
import StudentFaculty from './component/studentFolder/faculty/StudentFaculty';
import StudentSettings from './component/studentFolder/StudentSettings';

import TeacherDashboard from './component/teacherFolder/TeacherDashboard';
import TeacherCourses from './component/teacherFolder/Courses/TeacherCourses';
import TeacherSettings from './component/teacherFolder/TeacherSettings';
import CourseDetails from './component/studentFolder/Courses/CourseDetails';
import FilesPage from './component/studentFolder/Courses/FilesPage';
import UploadPage from './component/studentFolder/submission/UploadPage';
import { useState } from 'react';


function App() {

  const role = 'student';
  const isAuthenticated = true;
  const [clickedHamburger,setClickedHamburger] = useState(false);
  

  return (

    <Router>
      <div className='App'>
        {!isAuthenticated
         ?
         <Routes>
          <Route path='/' element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
         </Routes>
         :
         <div className='relative PageLayout flex flex-col sm:flex-row'>
          <div className={`${!clickedHamburger ? 'sticky' : 'fixed h-[70vh] sm:h-screen' }  sm:static z-40 w-screen sm:w-1/5`}><Sidebar role={role} clickedHamburger={clickedHamburger} setClickedHamburger={setClickedHamburger}/></div>
          <div className={`${clickedHamburger ? 'inset-0 opacity-10  sm:opacity-100' : ''}  absolute sm:static mt-16 sm:mt-0 SectionContainerLayout sm:h-screen w-screen sm:w-4/5`}>
            {role === 'student' 
             ?
             <Routes>
              <Route path='/' element={<StudentDashboard/>} />
              <Route path='/submission/*' element={<StudentSubmission/>} />
              <Route path='/submission/uploadPage' element={<UploadPage/>} />
              <Route path='/assignments' element={<Assignments/>} />
              <Route path='/courses/*' element={<StudentCourses/>} />
              <Route path='/facultyinfo' element={<StudentFaculty/>} />
              <Route path='/settings' element={<StudentSettings/>} />
              <Route path='/courses/coursedetails' element={<CourseDetails/>} />
              <Route path='/courses/coursedetails/filespage' element={<FilesPage/>} />
             </Routes>
             :
             <Routes>
              <Route path='/' element={<TeacherDashboard/>} />
              <Route path='/courses' element={<TeacherCourses/>} />
              <Route path='/settings' element={<TeacherSettings/>} />
             </Routes>
            }
          </div>
         </div>
        }
      </div>
    </Router>
  );
}

export default App;
