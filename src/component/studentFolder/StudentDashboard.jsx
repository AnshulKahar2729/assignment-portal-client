import React, { useState, useEffect, useContext } from 'react';
import Calendar from '../calendar/Calendar';
import Deadline from '../calendar/Deadline';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserContext } from '../../store/userContext';
import { Assignments } from './datas/Data';





function StudentDashboard() {

  const {user} = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  if (user === null) {
    // Handle the case when user is still null (loading state)
    return <div>Loading...</div>;
  }

  

  return (
    <div className='hideScrollbar w-full sm:h-full flex flex-col overflow-y-scroll text-[#245DE1]'>
      <div className='w-full  flex flex-col xl:flex-row gap-3 p-2'>
        <div className='w-full xl:w-[49%] text-[#245DE1] p-2 md:px-16 xl:px-20 flex justify-center xl:justify-between items-center gap-7 rounded-lg text-xl overflow-y-auto bg-white'>
          <div className='text-[80px] sm:text-[140px] text-[#245DE1]'><FaUserCircle /></div>
          <div className=''>
            <p className='text-lg sm:text-xl'>Name : {user?.name}</p>
            <p className='text-md sm:text-xl'>Branch : E&TC</p>
            <p className='text-md sm:text-xl'>Year (Div) : 2nd Year</p>
            <p className='text-md sm:text-xl'>Student Id : {user?.studentId}</p>
          </div>
        </div>
        <div className='w-full xl:w-[49%] h-[249px] flex flex-col bg-white rounded-lg  p-2'>
          <p className=' w-full h-[50px] flex flex-col justify-center items-center py-3 text-[#245DE1] border-b border-[#245de153] text-2xl'><b className='h-full'>Updates</b></p>
          <div className='hideScrollbar flex flex-col gap-5 text-lg sm:text-xl overflow-y-auto bg-[#245DE1] rounded-lg p-3 lg:bg-white lg:text-[#245DE1] text-white'>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg'>
              <p>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col-reverse gap-3 xl:flex-row xl:gap-3 p-2'>
        <div className='w-full xl:w-[49%] rounded-lg p-8 border-l text-white bg-white'><Deadline selectedDate={selectedDate} Assignments={Assignments}/></div>
        <div className='w-full xl:w-[49%] bg-white rounded-lg p-1 sm:p-8 '><Calendar onSelectDate={handleDateSelect} Assignments={Assignments}/></div>
      </div>
    </div>
  )
}

export default StudentDashboard