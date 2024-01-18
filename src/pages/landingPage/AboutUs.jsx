import React from 'react';
import About from '../../assets/AboutUsImg.png';

function AboutUs() {
  return (
    
    <div className=' w-full  sm:px-[1%] md:px-[3%] lg:px-[6%] xl:px-[12.5%]'>
      <div className=' w-full py-4 flex  sm:h-[200px] md:h-[400px] lg:h-[500px] items-center justify-center'>
        <div className='w-full lg:w-[50%] bg-gray-300 lg:bg-[#245DE1] rounded-2xl lg:rounded-l-2xl lg:rounded-r-none hidden lg:flex justify-center items-center h-full'>
          <img className='' src={About} alt='pic' />
        </div>
        <div className='flex flex-col z-10  w-full lg:w-[50%] h-full lg:border rounded-2xl lg:rounded-r-2xl lg:rounded-l-none  p-8 justify-center items-center text-center lg:text-left bg-gray-100'>
          <h3 className='text-[24px] sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] font-medium text-[#245DE1]  w-full'>About Us</h3>
          <p className='text-[10px] sm:text-sm md:text-md lg:text-lg m-2 py-3 text-gray-500'>ClassroomConnect is a groundbreaking project aimed at transforming traditional education by leveraging the power of technology. This comprehensive classroom app is designed to create a seamless and engaging learning experience for both students and educators. With a user-friendly interface and a myriad of features, ClassroomConnect aims to bridge the gap between physical and digital classrooms.</p>
        </div>
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