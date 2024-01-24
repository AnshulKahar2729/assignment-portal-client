import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from './pages/landingPage/IndexPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TestApi from './testapi/TestApi';
import Sidebar from './component/CommonComponents/Sidebar';

import StudentDashboard from './component/studentFolder/StudentDashboard';
import StudentSubmission from './component/studentFolder/submission/StudentSubmission';
import StudentCourses from './component/studentFolder/Courses/StudentCourses';
import StudentFaculty from './component/studentFolder/faculty/StudentFaculty';
import StudentSettings from './component/studentFolder/StudentSettings';

import TeacherDashboard from './component/teacherFolder/TeacherDashboard';
import TeacherCourses from './component/teacherFolder/Courses/TeacherCourses';
import TeacherSettings from './component/teacherFolder/TeacherSettings';
import StudentDetails from './component/teacherFolder/Students/faculty/StudentDetails';
import StudentCourseDetails from './component/studentFolder/Courses/StudentCourseDetails';
import UploadPage from './component/studentFolder/submission/UploadPage';

import { useState, useEffect, useContext } from 'react';
import TeacherCourseDetails from './component/teacherFolder/Courses/TeacherCourseDetails';
import StudentAssignments from './component/teacherFolder/Students/faculty/StudentAssignments';
import FilesPage from './component/CommonComponents/FilesPage';
import AssignmentStudent from './component/studentFolder/Assignment';
import AssignmentTeacher from './component/teacherFolder/Assignment';
import { UserContext, UserProvider } from './store/userContext';
import StudentInfo from './component/teacherFolder/StudentInfo';
// import { useNavigate } from 'react-router-dom';

function App() {
  // const isAuthenticated = true;
  const [clickedHamburger, setClickedHamburger] = useState(false);
  // const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const {user} = useContext(UserContext);
  
  const handleAuth = () => {
    setIsAuthenticated(true);
  }

  useEffect(() => {
    const chechAuth = () => {
      if(!user){
        console.log('not logged In');
        setIsAuthenticated(false)
  
      } else{
        console.log('logged In');
        setIsAuthenticated(true)
        user.teacherId ? setRole('teacher') : setRole('student');
      }
    }
    chechAuth();
  }, [user]);

  return (

    <Router>
      <div className='App'>
        {!isAuthenticated
         ?
         <Routes>
          <Route path='/' element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage handleAuth={handleAuth}/>} />
          <Route path='/signup' element={<SignUpPage handleAuth={handleAuth}/>} />
         </Routes>
         :
         <div className='relative PageLayout flex flex-col sm:flex-row'>
          <div className={`${!clickedHamburger ? 'sticky' : 'fixed sm:h-screen' }  sm:static z-40 w-screen sm:w-1/5`}><Sidebar role={role} clickedHamburger={clickedHamburger} setClickedHamburger={setClickedHamburger}/></div>
          <div className={`${clickedHamburger ? 'inset-0 opacity-10  sm:opacity-100' : ''}  absolute sm:static mt-20 sm:mt-0 SectionContainerLayout sm:h-screen w-screen sm:w-4/5`}>
            {role === 'student' 
             ?
             <Routes>
              <Route path='/' element={<StudentDashboard userInfo={user}/>} />
              <Route path='/submission/*' element={<StudentSubmission/>} />
              <Route path='/submission/uploadPage/:id' element={<UploadPage/>} />
              <Route path='/assignments' element={<AssignmentStudent/>} />
              <Route path='/courses/*' element={<StudentCourses/>} />
              <Route path='/facultyinfo' element={<StudentFaculty/>} />
              <Route path='/settings' element={<StudentSettings/>} />
              <Route path='/courses/coursedetails/:id' element={<StudentCourseDetails/>} />
              <Route path='/courses/coursedetails/files/:courseId' element={<FilesPage role={role}/>} />
             </Routes>
             :
             <Routes>
              <Route path='/' element={<TeacherDashboard/>} />
              <Route path='/courses/*' element={<TeacherCourses/>} />
              <Route path='/settings' element={<TeacherSettings/>} />
              <Route path='/courses/coursedetails/:id' element={<TeacherCourseDetails/>} />
              <Route path='/courses/coursedetails/files/:courseId' element={<FilesPage role={role}/>} />
              <Route path='/assignments' element={<AssignmentTeacher role={role}/>} />
              <Route path='/assignments/studentdetails/*' element={<StudentDetails/>} />
              <Route path='/assignments/studentdetails/studentAssignmentInfo' element={<StudentAssignments/>} />
              <Route path='/studentinfo' element={<StudentInfo/>} />
              {/* <Route path='/assignments' element={<Assignments role={role}/>} /> */}
              {/* <Route path='/assignments/studentdetails/*' element={<StudentCourseDetails/> } /> */}
              {/* <Route path='/assignments/studentdetails/studentAssignmentInfo' element={<StudentAssignments/>} /> */}
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
