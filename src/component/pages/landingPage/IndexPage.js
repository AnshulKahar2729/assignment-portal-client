import React from 'react';
import { Link } from 'react-router-dom';
import Sections from './Sections';

function IndexPage() {
  return (
    <div className='w-full bg-white'>
       <div className="m-0 p-0 box-border text-xl width text-slate-900 font-semibold font-serif">
        <div className="h-20 flex items-center  px-[12.5%]">
          <span className="text-4xl text-black mx-6 font-bold">Logo</span>
          <div className="lg:flex md:flex lg:flex-1 gap-5 justify-end font-normal">
            <Link to="SignUpPage"><button className=" bg-blue-500 text-white hover:bg-blue-700  py-1 px-3 rounded">Sign Up</button></Link>
            <Link to="LoginPage"><button className=" " >Login</button></Link>
          </div>
        </div>
      </div>
        <Sections/>
    </div>
  );
}

export default IndexPage