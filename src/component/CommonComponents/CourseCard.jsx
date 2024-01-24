import React, {useState, useEffect, useContext} from 'react';
import ProfImg from '../../assets/ProfImg.png';
import axios from 'axios';
import { UserContext } from '../../store/userContext';




function CourseCard({name, numberOfStudents, enrollBtn, courseId}) {
  
  const {user} = useContext(UserContext);

    const handleEnroll = async () => {
      console.log(courseId)
      try {
        const { data } = await axios.post(`https://assignment-portal-server.onrender.com/api/course/enroll/${courseId}?role=student`, {
          studentId: user.studentId
        });

        if(data){
          alert('Course Enrolled successfully')
        }
  
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
        <div className="relative w-72 rounded-lg flex flex-col cursor-pointer overflow-hidden bg-white shadow-lg border">
          
          <div className='absolute w-full bg-[#245DE1] text-white p-3 shadow-lg pb-4'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h4 className='text-sm'>student Enrolled: {numberOfStudents}</h4>
          </div>

          <img className='sticky top-11 left-40 right-0 w-32 h-28 ' src={ProfImg}  alt='ProfImg'/>
          {
          !enrollBtn &&
          <ul className='list-disc w-full flex flex-col p-6'>
            
              <li className='w-full'>Assignments</li>
              <li className='w-full'>Notes/Resources</li>
              <li className='w-full'>Question Bank</li>
              <li className='w-full'>Activities</li>
          </ul>
          }

          {
          enrollBtn &&
          <button className='p-2 m-4 mt-8 rounded-lg' onClick={handleEnroll}>Enroll Course</button>
          }
          
        </div>
    </div>
  )
}

export default CourseCard