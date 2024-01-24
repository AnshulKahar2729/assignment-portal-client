import React, { useState, useEffect, useContext } from 'react';
import Calendar from './calendar/Calendar';
import Deadline from './calendar/Deadline';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserContext } from '../../store/userContext';
import { Assignments } from './datas/Data';
import Updates from './Updates';
import { user } from './datas/User';




function StudentDashboard({userInfo}) {

  // const {user} = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  if (user === null) {
    return <div>Loading...</div>;
  }


  const enrolledCourses = user?.enrolledCourses || [];
  const allAssignments = [];
  for (const course of enrolledCourses) {
    const courseAssignments = course.assignments || [];
    const firstTwoAssignments = courseAssignments.slice(0, 2);
    allAssignments.push(...firstTwoAssignments);
  }

  

  return (
    <div className='hideScrollbar w-full sm:h-full flex flex-col overflow-y-scroll text-[#245DE1]'>
      <div className='w-full  flex flex-col xl:flex-row gap-3 p-2'>
        <div className='w-full xl:w-[49%] text-[#245DE1] p-2 md:px-16 xl:px-20 flex justify-center xl:justify-between items-center gap-7 rounded-lg text-xl overflow-y-auto bg-white'>
          <div className='text-[80px] sm:text-[140px] text-[#245DE1]'><FaUserCircle /></div>
          <div className=''>
            <p className='text-lg sm:text-xl'>Name : {userInfo.name}</p>
            <p className='text-md sm:text-xl'>Branch : {userInfo.branch}</p>
            <p className='text-md sm:text-xl'>D {userInfo.division} : {userInfo.year}</p>
            <p className='text-md sm:text-xl'>Student Id : 82265328ac</p>
          </div>
        </div>
        <Updates allAssignments={allAssignments}/>
      </div>

      <div className='w-full h-full flex flex-col-reverse gap-3 xl:flex-row xl:gap-3 p-2'>
        <div className='w-full xl:w-[49%] rounded-lg p-8 border-l text-white bg-white'>
          <Deadline selectedDate={selectedDate} Assignments={Assignments} />
        </div>
        <div className='w-full xl:w-[49%] bg-white rounded-lg p-1 sm:p-8 '>
          <Calendar onSelectDate={handleDateSelect} Assignments={Assignments} />
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard;