import React from 'react';
import About from '../../assets/AboutUs.avif';

function AboutUs() {
  return (
    <div className=' w-full my-8 flex flex-col md:flex-row lg:flex-row items-center justify-center rounded-2xl overflow-hidden gap-1 text'>
        <div className='w-1/2 bg-blue-800 flex justify-center rounded-l-2xl'>.
            <img className=' ' src={About} alt='pic' />    
        </div>
        <div className=' bg-white text-blue-800 hover:bg-blue-800 hover:text-white m-x flex flex-col gap-5 p-10 justify-center '>
            <h3 className='text-4xl font-medium font-serif '>About ClassRoomConnect</h3>
            <p className='text-2xl m-2 p-3 '>ClassroomConnect is a groundbreaking project aimed at transforming traditional education by leveraging the power of technology. This comprehensive classroom app is designed to create a seamless and engaging learning experience for both students and educators. With a user-friendly interface and a myriad of features, ClassroomConnect aims to bridge the gap between physical and digital classrooms.</p>
        </div>
    </div>
  )
}

export default AboutUs