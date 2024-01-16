import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './component/Header.jsx';
import SideBar from './component/SideBar';

import IndexPage from './component/pages/landingPage/IndexPage';
import LoginPage from './component/pages/Loginpage/LoginPage';
import SignUpPage from './component/pages/SignUpPage';

import StudentDashboard from './student/StudentDashboard';

import TeacherDashboard from './teacher/TeacherDashboard';
import StudentSubmissions from './student/StudentSubmissions';
import StudentAssignments from './student/StudentAssignments';
import StudentCourses from './student/StudentCourses';
import StudentFaculty from './student/StudentFaculty';
import TeacherCourses from './teacher/TeacherCourses';
import StudentSettings from './student/StudentSettings';
import TeacherSettings from './teacher/TeacherSettings';
import NotFound from './component/NotFound.jsx';

function App() {

  const role ='student'
  const isAuthenticated = true;
  return (

    <Router>
      <div className="App">
        {!isAuthenticated?
        <>
          {/* Rendering simple landing page if user is not logged In  */}
          <Routes>
            <Route path='/' element={<IndexPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />

            {/* if wrong location  */}
            <Route element={<NotFound/>} />
          </Routes>
        </>
        :
        <div className='DashboardLayout'>
          {/* STUDENTS ROUTES  */}
          <Header/>
          <SideBar role={role}/>
          <div className='MainContentContainer'>
            {role==="student"?
            <Routes>
              <Route path='/' element={<StudentDashboard/>} />
              <Route path='/dashboard' element={<StudentDashboard/>} />
              <Route path='/submissions' element={<StudentSubmissions/>} />
              <Route path='/assignments' element={<StudentAssignments/>} />
              <Route path='/courses' element={<StudentCourses/>} />
              <Route path='/faculty' element={<StudentFaculty/>} />

              {/* <Route path='profile' element={<StudentProfile/>} /> */}
              <Route path='/settings' element={<StudentSettings/>} />
              
              {/* if wrong location  */}
              <Route element={<NotFound/>} />
            </Routes>
            :
            <Routes>
              <Route path='/' element={<TeacherDashboard/>} />
              <Route path='/dashboard' element={<TeacherDashboard/>} />
              <Route path='/courses' element={<TeacherCourses/>} />

              {/* <Route path='profile' element={<StudentProfile/>} /> */}
              <Route path='/courses' element={<TeacherSettings/>} />
              
              {/* if wrong location  */}
              <Route element={<NotFound/>} />
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
