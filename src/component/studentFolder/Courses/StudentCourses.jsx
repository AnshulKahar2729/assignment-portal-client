import CourseCard from '../../CommonComponents/CourseCard';
import StudentImg from '../../../assets/ProfImg.png';
import {Data} from '../datas/Data';
import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function StudentCourses() {

  const [courses,setCourses] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://assignment-portal-server.onrender.com/api/profile';

    axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className=' w-full sm:h-full  p-2 overflow-y-scroll gap-2 sm:gap-10 flex flex-col'>
      <div className=''>
      <div className='w-full text-xl sm:text-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center px-7 bg-[#245DE1] text-white rounded-lg'>
        <h2>Courses : </h2>
        <div className='flex w-full justify-between sm:w-fit items-center sm:gap-3 '>
          <p className=''>Name of Student</p>
          <img className='w-28' src={StudentImg} alt='StudentImg'/>
          {/* <CgProfile className="text-5xl"/> */}
        </div>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto '>
          {
            courses.map((course) => <Link to='/courses/coursedetails'><CourseCard key={course.id} course={course} /></Link>)
          }
      </div>
    </div>
  )
}

export default StudentCourses