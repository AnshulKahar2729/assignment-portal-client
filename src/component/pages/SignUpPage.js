import React from 'react'
import pic from '../../assets/pic.avif'

const SignUpPage = () => {
  return (
    <>
      <div className="min-h-screen py-40 bg-blue-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-blue-500" >
            <img src={pic} alt=""/>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl font-bold mb-4">Create Your Account</h2>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="FirstName" className="border border-gray-400 py-1 px-2" />
                <input type="text" placeholder="LastName" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
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

export default SignUpPage