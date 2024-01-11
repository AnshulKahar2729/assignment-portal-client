import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('faculty');


  const handleLogin = () => {
    console.log(`Logging in as ${category} with username: ${username} and password: ${password}`);
  };

  return (
    <div className='w-screen h-screen flex items-center'>
      <div className="login-page">
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
        </label>
      </div>
      {
        (category === 'faculty') ? <button onClick={handleLogin}><Link to="/teacherlayoutpage">Login</Link></button> : ((category === 'student') ? <button onClick={handleLogin}><Link to="/studentlayoutpage">Login</Link></button> : <button onClick={handleLogin}><Link to="/loginpage">Login</Link></button>)
      }
      {/* <button onClick={handleLogin}><Link to="/studentlayoutpage">Login</Link></button> */}
      
    </div>
    </div>
  );
};

export default LoginPage;
