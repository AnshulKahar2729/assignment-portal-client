import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import pic from '../../assets/pic.avif'

const SignUpPage = () => {

  const [role,setRole] = useState('student')


  return (
    <>
      <div className="h-screen w-screen bg-blue-300 flex items-center">
      <div className="container mx-auto h-[65%] w-[60%] flex">
        <div class="md:block hidden h-full w-1/2 text-2xl font-bold gap-2 text-center bg-white rounded-l-xl ">
            <Link to='/'><p className='text-5xl font-serif text-blue-600 w-full h-full flex justify-center items-center'>Logo</p></Link>
            {/* <img  src={pic} alt="" srcset="" className='rounded-2xl'/> */}
      	</div>
        <div className="flex flex-col lg:flex-row w-full md:w-1/2 bg-blue-500 rounded-xl md:rounded-l-none md:rounded-r-xl mx-auto shadow-lg overflow-hidden items-center justify-center">
          <div className="w-full p-5">
            <h2  className="text-3xl font-bold mb-4">Create Your Account</h2>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="FirstName" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="LastName" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
              </div>


              <div className=" m-5">
                  <label htmlFor="role" className="">
                    Role -
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(event) => {
                      setRole(event.target.value);
                    }}
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                  </select>
                </div>


              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <button className="w-full bg-blue-400 py-3 text-center text-white">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpPage