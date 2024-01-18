import React from 'react';
import About from '../../assets/AboutUsImg.png';

function AboutUs() {
  return (
    
    <div className='w-full p-4 flex h-[500px] items-center justify-center'>
      <div className='w-[40%] h-full bg-[#245DE1] rounded-l-2xl flex justify-center items-center'>
        <img className='' src={About} alt='pic' />
      </div>
      <div className='flex flex-col w-[40%] h-full bg-white border  rounded-r-2xl text-[#245DE1] p-8 justify-center items-center '>
        <h3 className='text-4xl font-medium font-serif w-full'>About ClassRoomConnect</h3>
        <p className='text-xl m-2 py-3 '>ClassroomConnect is a groundbreaking project aimed at transforming traditional education by leveraging the power of technology. This comprehensive classroom app is designed to create a seamless and engaging learning experience for both students and educators. With a user-friendly interface and a myriad of features, ClassroomConnect aims to bridge the gap between physical and digital classrooms.</p>
      </div>
    </div>
  )
}

export default AboutUs











{/* <div className=' w-full my-8 flex flex-col md:flex-row lg:flex-row items-center justify-center rounded-2xl overflow-hidden gap-1 text'>
        <div className='w-1/2 bg-blue-800 flex justify-center rounded-l-2xl'>.
            <img className='w-96' src={About} alt='pic' />    
        </div>
        <div className='w-1/2 bg-white text-blue-800 hover:bg-blue-800 hover:text-white m-x flex flex-col gap-5 p-10 justify-center '>
            <h3 className='text-4xl font-medium font-serif '>About ClassRoomConnect</h3>
            <p className='text-2xl m-2 p-3 '>ClassroomConnect is a groundbreaking project aimed at transforming traditional education by leveraging the power of technology. This comprehensive classroom app is designed to create a seamless and engaging learning experience for both students and educators. With a user-friendly interface and a myriad of features, ClassroomConnect aims to bridge the gap between physical and digital classrooms.</p>
        </div>
    </div> */}