import React, { useState, useEffect, useContext } from 'react';
import Calendar from './calendar/Calendar';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserContext } from '../../store/userContext';
import RecentPosts from './calendar/RecentPosts';
import  {Posts}  from './Datas/Data';


function TeacherDashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const {user} = useContext(UserContext);


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  console.log('User :::: > ',user)

  return (
    <div className='hideScrollbar w-full sm:h-full flex flex-col overflow-y-scroll text-[#245DE1]'>
      <div className='w-full  flex flex-col xl:flex-row gap-3 p-2'>
        <div className='w-full xl:w-[49%] text-[#245DE1] p-2 md:px-16 xl:px-20 flex justify-center xl:justify-between items-center gap-7 rounded-lg text-xl overflow-y-auto bg-white'>
          <div className='text-[140px] text-[#245DE1]'><FaUserCircle /></div>
          <div className=''>
            <p>Name : {user?.name}</p>
            <p>email : {user?.email}</p>
            <p>Teacher Id : {user?.teacherId}</p>
          </div>
        </div>
        <div className='w-full xl:w-[49%] h-[249px] flex flex-col bg-white rounded-lg  p-2'>
          <p className=' w-full h-[50px] flex flex-col justify-center items-center py-3 text-[#245DE1] border-b border-[#245de153] text-2xl'><b className='h-full'>Updates</b></p>
          <div className='hideScrollbar flex flex-col gap-5 text-xl overflow-y-auto bg-[#245DE1] rounded-lg p-3 lg:bg-white lg:text-[#245DE1] text-white'>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 1 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 2 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 3 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 4 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 5 Uploaded</p>
            </div>
            <div className='flex flex-col p-1 border-[#245DE1] rounded-lg '>
              <p className='text-sm text-red-600 animate-pulse'>New Assignment</p>
              <p>Data Structure Assignment 6 Uploaded</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse gap-3 xl:flex-row xl:gap-3 p-2'>
        <div className='w-full xl:w-[49%] rounded-lg p-8 border-l text-white bg-white'><RecentPosts selectedDate={selectedDate} Posts={Posts}/></div>
        <div className='w-full xl:w-[49%] bg-white rounded-lg p-8 '><Calendar onSelectDate={handleDateSelect} Posts={Posts}/></div>
      </div>
    </div>
  )
}

export default TeacherDashboard