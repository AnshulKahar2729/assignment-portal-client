import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
// import pic from '../../../assets/pic.avif'

const LoginPage = () => {

  const [role,setRole] = useState('student');
  const [forwardTo,setForwardTo] = useState('')

  function handleLoginClick() {
    if (role === 'student') {
      setForwardTo('/studentlayoutpage');
    } else if (role === 'faculty') {
      setForwardTo('/teacherlayoutpage');
    }
  }

  useEffect(() => {
    console.log('Role',role)
  },[role])

  useEffect(() => {
    if (forwardTo) {
      window.location.href = forwardTo;
    }
  }, [forwardTo]);



  return (
    <>
        <section class="bg-gray-400 w-screen h-screen flex items-center justify-center">
        
  <div class=" flex w-[60%] bg-white rounded-2xl shadow-lg max-w-3xl  items-center">
    <div class="md:block hidden w-1/2 text-2xl font-bold gap-2 text-center ">
        <Link to='/'><p className='text-5xl font-serif text-blue-600'>Logo</p></Link>
        {/* <img  src={pic} alt="" srcset="" className='rounded-2xl'/> */}
    </div>
    <div class="md:w-1/2 rounded-r-xl p-5 md:px-16 bg-blue-500">
      <h2 class="font-bold text-4xl text-[white]">Login</h2>
      <p class="text-xs mt-4 text-[white]">If Account Exist, You can Easily Login</p>

      <form action="" className="flex flex-col gap-2">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="m-5">
              <label htmlFor="role">Role -</label>
              <select
                id="role"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
                aria-label="Select Role"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
            <Link to={forwardTo}>
              <button
                className="bg-[#002D74] rounded-xl w-full text-white p-2 hover:scale-105 duration-300"
                onClick={handleLoginClick}
                aria-label="Login Button"
              >
                Login
              </button>
            </Link>
          </form>

      <div class="mt-6 grid grid-cols-3 items-center text-white">
        <hr class="border-white" />
        <p class="text-center text-sm">OR</p>
        <hr class="border-white" />
      </div>

      <button class="bg-white border py-2 w-full rounded-xl gap-3 mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[white]">
        <span className='text-3xl'><FcGoogle/></span>
        Login with Google
      </button>
      <div class="mt-5 text-xs border-b border-[white] py-4 text-[white] cursor-pointer">
        Forgot Your Password ? 
      </div>

      <div class="mt-3 text-xs flex justify-between items-center gap-3 text-blue-600">
        <p className='text-white'>Don't have an account?</p>
        <Link to="/signuppage"><button class="py-2 bg-white border rounded-xl hover:scale-110 duration-300 text-blue-900 text-xl w-32">Sign Up</button></Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default LoginPage