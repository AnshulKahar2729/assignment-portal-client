import React, {useContext, useState } from 'react';
import CourseCard from '../../CommonComponents/CourseCard';
import StudentImg from '../../../assets/ProfImg.png';
// import {Data} from '../Datas/Data';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../../store/userContext';



function TeacherCourses() {
  
  // useEffect(() => {
  const {user} = useContext(UserContext);
  
  // const [courses,setCourses] = useState([]);
  const [createCourseName, setCreateCourseName] = useState("");
  const teacherId = "20678a3c16";

  const handleCourseCreate = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post("https://assignment-portal-server.onrender.com/api/course?role=teacher", {
        name : createCourseName,
        teacherId: teacherId
      });

      if (data) {
        alert('Course created successfully')
      }
      console.log('Course created successfully')

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className=' w-full sm:h-full  p-2 overflow-y-scroll gap-2 sm:gap-10 flex flex-col'>
      <div className=''>
      <div className='w-full text-xl sm:text-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center px-7 bg-[#245DE1] text-white rounded-lg'>
        <h2>Courses : </h2>
        <div className='flex w-full justify-between sm:w-fit items-center sm:gap-3 '>
          <p className=''>Teacher Name: {user.name}</p>
          <img className='w-28' src={StudentImg} alt='StudentImg'/>
          {/* <CgProfile className="text-5xl"/> */}
        </div>
      </div>
      </div>

      <div className='w-full p-6 bg-white rounded-lg'>
        <h2 className='w-full text-center text-[#245DE1] text-lg font-bold mb-4'>Create New Course</h2>
        <form className='w-full flex gap-4' onSubmit={handleCourseCreate}>
          <input className='outline-none text-[#245DE1] w-full border-2 px-2' type="text" placeholder='Course Name' value={createCourseName} onChange={(event) => setCreateCourseName(event.target.value)} />
          <button className='rounded-md'>Create</button>
        </form>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-24 xl:gap-28 m-auto'>
          {/* {
            courses.map((course) => <Link to='/courses/coursedetails'><CourseCard key={course.id} course={course} /></Link>)
          } */}
          {/* , divisionName, className, profName */}
          {/* <CourseCard courseName="BXE" className="SE" profName="Nilesh Sir" divisionName="D"  />
          <CourseCard courseName="BEE" className="FE" profName="Bharti Ma'am" divisionName="A"  />
          <CourseCard courseName="CHEM" className="TE" profName="Sinu Ma'am" divisionName="B"  /> */}
          {
            user.assignedCourses?.map((item) => (
              <Link to={`/courses/coursedetails/${item._id}`}><CourseCard courseName={item.name} numberOfStudents={item.studentsEnrolled.length}  /></Link>
            ))
          }
      </div>
      
      {/* <div className='p-8 bg-white pb-12'>
        <h2 className='text-lg font-bold mb-4'>Create New Course</h2>
        <form className='flex gap-4' onSubmit={handleCourseCreate}>
          <input className='border-2 px-2' type="text" placeholder='Course Name' value={createCourseName} onChange={(event) => setCreateCourseName(event.target.value)} />
          <button>Create</button>
        </form>
      </div> */}


    </div>
  )
}

export default TeacherCourses