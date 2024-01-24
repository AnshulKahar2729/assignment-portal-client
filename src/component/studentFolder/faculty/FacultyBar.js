import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import ProImg from '../../../assets/ProfImg.png';

const FacultyBar = ({windowWidth, name, subject}) => {
  return (
    <>
        <div className=''>
          <div className='h-20 px-2 sm:px-8 flex items-center justify-between border-b border-[#245DE1]'>
            <img className='w-24' src={ProImg} alt='ProImg'/>
            <p className='text-[#245DE1] text-md font-semibold'>{name} Sir</p>
            {
              (windowWidth >= 800) && (
                <p className='text-[#245DE1] text-md font-semibold'>{subject}</p> 
              )
            }
          </div>
      </div>
    </>
  )
}

export default FacultyBar