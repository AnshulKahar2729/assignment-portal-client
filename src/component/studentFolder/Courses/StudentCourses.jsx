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
  const [allCourses,setAllCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post("https://assignment-portal-server.onrender.com/api/course?role=student", {
          studentId: user?.studentId
        });

        console.log('Courses fetched successfully:', data.sendCourses);
        setAllCourses(data.sendCourses)
  
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
      {/* all coursees  */}
      <h2 className='text-lg'>Enrolled Courses:</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto'>
          {allCourses?.map((item) => (
            <Link to='/courses/coursedetails'><CourseCard name={item.name} profName="Bharti Ma'am" numberOfStudents={item.numberOfStudents}  enrollBtn={false}  /></Link>
          ))}
      </div>
      {/* all coursees  */}
      <h2 className='text-lg'>All Courses:</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto'>
          {allCourses?.map((item) => (
            <Link to='/courses/coursedetails'><CourseCard name={item.name} profName="Bharti Ma'am" numberOfStudents={item.numberOfStudents} enrollBtn={true}  /></Link>
          ))}
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