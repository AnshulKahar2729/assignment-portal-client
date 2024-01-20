import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import ProImg from '../../../../assets/ProfImg.png';

const FacultyBar = ({windowWidth}) => {
  return (
    <>
        <div className='hover:bg-blue-100'>
          <div className='h-20 px-2 sm:px-8 flex items-center justify-between border-b border-[#245DE1]'>
            <img className='w-24' src={ProImg} alt='ProImg'/>
            <p className='text-[#245DE1] text-md font-semibold'>NAME_OF_STUDENT</p>
            {
              (windowWidth >= 800) && (
                <p className='text-[#245DE1] text-md font-semibold'>NAME_OF_COURSE</p> 
              )
            }
          </div>
      </div>
    </>
  )
}

export default FacultyBar