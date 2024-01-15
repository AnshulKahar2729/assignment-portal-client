import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './component/pages/landingPage/IndexPage';
import LoginPage from './component/pages/Loginpage/LoginPage';
import SignUpPage from './component/pages/SignUpPage';
import StudentPageLayout from './component/pages/StudentPageLayout';
import TeacherPageLayout from './component/pages/TeacherLayoutPage';
import FileDropZone from './component/FileDropZone';

function App() {


  return (

    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/loginpage' element={<LoginPage/>} />
        <Route path='/signuppage' element={<SignUpPage/>} />
        <Route path='/studentlayoutpage' element={<StudentPageLayout/>} />
        <Route path='/teacherlayoutpage' element={<TeacherPageLayout/>} />
        <Route path='/upload' element={<FileDropZone/>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
