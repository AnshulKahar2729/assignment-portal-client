import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './Components/Pages/IndexPage';
import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';
import StudentDashboard from './Components/Pages/StudentDashboard';
import TeacherDashboard from './Components/Pages/TeacherDashboard';

function App() {
  return (

    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/studentdashboard' element={<StudentDashboard/>} />
        <Route path='/teacherdashboard' element={<TeacherDashboard/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
