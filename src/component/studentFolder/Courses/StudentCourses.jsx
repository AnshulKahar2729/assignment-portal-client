import CourseCard from '../../CommonComponents/CourseCard';
import StudentImg from '../../../assets/ProfImg.png';
import {Data} from '../datas/Data';
import React , { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../store/userContext';



function StudentCourses() {

  const {user} = useContext(UserContext);
  const [enrolledCourses,setEnrolledCourses] = useState([]);
  const [allcourses,setAllCourses] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://assignment-portal-server.onrender.com/api/course?role=student", {
          studentId: user.userId
        });

        console.log('Faculty fetched successfully:', data);
        setAllCourses(data)
  
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[])

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
      <h2 className='text-lg'>Enrolled Courses:</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto'>
          {/* {
            enrolledCourses.map((course) => <Link to='/courses/coursedetails'><CourseCard key={course.id} course={course} /></Link>)
          } */}
          
          <Link to='/courses/coursedetails'><CourseCard courseName="BXE" className="SE" profName="Nilesh Sir" divisionName="D"  /></Link>
          <Link to='/courses/coursedetails'><CourseCard courseName="BEE" className="FE" profName="Bharti Ma'am" divisionName="A"  /></Link>
          <Link to='/courses/coursedetails'><CourseCard courseName="CHEM" className="TE" profName="Sinu Ma'am" divisionName="B"  /></Link>
      </div>

      {/* <h2 className='text-lg'>other Courses:</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto'>
          {
            enrolledCourses.map((course) => <Link to='/courses/coursedetails'><CourseCard key={course.id} course={course} /></Link>)
          }
      </div> */}

    </div>
  )
}

export default StudentCourses