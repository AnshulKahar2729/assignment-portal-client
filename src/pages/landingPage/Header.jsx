import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <div className="m-0 p-0 box-border text-xl width text-slate-900 font-semibold font-serif">
        <div className="h-20 flex items-center">
          <span className="text-4xl text-black mx-6 font-bold">Logo</span>
          <div className='flex flex-1 gap-4 justify-end'>
            <Link to="SignUpPage"><button className=" bg-blue-500 text-white hover:bg-blue-700  py-1 px-3 rounded">Sign Up</button></Link>
            <button className=" border-black border  hover:bg-gray-200  hover:border-gray-200 text-black py-1 px-3 rounded mr-7"><Link to="LoginPage">Login</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header