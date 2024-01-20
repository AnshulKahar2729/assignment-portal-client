import React from 'react';
import ProfImg from '../../assets/ProfImg.png';

function CourseCard({name, profName, numberOfStudents, enrollBtn}) {
  return (
    <div>
        <div className="relative w-72 rounded-lg flex flex-col cursor-pointer overflow-hidden bg-white shadow-lg border">
          
          <div className='absolute w-full bg-[#245DE1] text-white p-3 shadow-lg'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h3 className='text-sm'>{profName}</h3>
            <h4 className='text-sm'>student count: {numberOfStudents}</h4>
          </div>

          <img className='sticky top-11 left-40 right-0 w-32 h-28 ' src={ProfImg}  alt='ProfImg'/>
          
          <ul className='list-disc w-full flex flex-col p-6'>
            {enrollBtn ?
            <>
              <button className='mt-8 rounded-lg'>Enroll Course</button>
            </>
            :
            <>
              <li className='w-full'>Assignments</li>
              <li className='w-full'>Notes/Resources</li>
              <li className='w-full'>Question Bank</li>
              <li className='w-full'>Activities</li>
            </>
          }
          </ul>
          
        </div>
    </div>
  )
}

export default CourseCard