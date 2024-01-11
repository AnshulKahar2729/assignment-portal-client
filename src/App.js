import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './Components/Pages/IndexPage';
import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';
import StudentPageLayout from './Components/Pages/StudentPageLayout';
import TeacherPageLayout from './Components/Pages/TeacherLayoutPage';

function App() {
  return (

    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/studentlayoutpage' element={<StudentPageLayout/>} />
        <Route path='/teacherlayoutpage' element={<TeacherPageLayout/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
