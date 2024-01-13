import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const FacultyBar = () => {
  return (
    <>
        <div className='flex flex-col shadow-2xl'>
        <div className='flex flex-row w-[90vw] shadow-2xl justify-center items-center mx-6 my-4 md:w-[70vw] lg:w-[70vw] h-[18vh] md:h-[15vh] lg:h-[15vh] bg-blue-500 md:block lg:block  md:m-2 lg:m-4 md:ml-10 lg:ml-16 md:p-4 lg:p-4 rounded-xl'>
        <div className="flex mt-4 justify-around mx-3">
           <p className='md:text-4xl lg:text-4xl'><FaRegUserCircle/></p>
           <div className='text-xl font-bold'>Name Of proffesor <p className='font-light'>FacultyId : asj6djjs5_6</p></div>
          
          <div className="lg:flex md:flex flex-row lg:flex-1 ml-8 justify-end font-normal">
           <span className="text-xl mx-[10px] font-bold">Courses : Data Structures</span>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default FacultyBar