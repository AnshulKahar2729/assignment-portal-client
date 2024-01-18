import React from "react";
import School from '../../assets/School.jpg';
import College from '../../assets/College.jpg';
import Institution from '../../assets/Institution.jpg';

function Benefits() {
  return (
    <div className="py-[2%] sm:px-[1%] md:px-[3%] lg:px-[6%] xl:px-[12.5%] bg-white">
      <p className="text-gray-500 sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7 m-2 p-2 font-serif text-center mb-8">
        Benfits of using Connect
      </p>
      <div className="w-full flex justify-center ">
        <div className="w-full grid grid-cols-1 xl:grid-cols-3 justify-items-center">
            <div className="bg-gray-100 transition-all gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-[#245DE1]  hover:shadow-lg hover:scale-105 duration-300 hover:bg-white" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={School} alt="pic"/>         
                <p className="my-5 sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7  text-[#245DE1]">School</p>
                <p className='text-gray-500 line-clamp-4 sm:line-clamp-none'>Streamlined assignment management and communication tools reduce administrative workload, allowing school staff to focus on strategic planning and educational development.Improved communication between teachers, students, and parents fosters a sense of community within the school, creating a conducive environment for learning.</p>
            </div>


            <div className="bg-gray-100 transition-all gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-[#245DE1]  hover:shadow-lg hover:scale-105 duration-300 hover:bg-white" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={College} alt="pic"/>  
                <p className="my-5 sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7  text-[#245DE1]">College</p>
                <p className='text-gray-500 line-clamp-4 sm:line-clamp-none'>The platform offers flexibility in learning, allowing college students to access course materials and collaborate with peers regardless of their physical location.Improved communication channels enable colleges to provide better support services, including counseling, career guidance, and academic assistance.</p>
            </div>          
            <div className="bg-gray-100 transition-all gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-[#245DE1]  hover:shadow-lg hover:scale-105 duration-300 hover:bg-white" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={Institution} alt="pic"/>        
                <p className="my-5 sm:text-2xl md:text-4xl lg:text-[40px] xl:text-[50px] leading-7  text-[#245DE1]">Institutions</p>
                <p className='text-gray-500 line-clamp-4 sm:line-clamp-none'>The digitization of administrative processes and reduced reliance on physical resources contribute to cost savings for institutions.ClassroomConnect facilitates a holistic education delivery model, combining traditional teaching methods with innovative technology, ensuring that institutions stay relevant in the evolving educational landscape.</p>
            </div>          
        </div>
      </div>
      
    </div>
  );
}

export default Benefits;