import React from "react";
import School from '../../assets/School.jpg';
import College from '../../assets/College.jpg';
import Institution from '../../assets/Institution.jpg';

function Benefits() {
  return (
    <div className="" style={{backgroundColor:"#ffff" ,padding:"2% 2.5%"}}>
      <p className="text-blue-900 text-4xl m-2 p-2 font-serif text-center mb-8">
        Benfits of using ClassRoomConnect
      </p>
      <div className="w-full">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="bg-blue-800 transition-all gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={School} alt="pic"/>         
                <p className="my-5 text-4xl font-serif">School</p>
                <p className=''>Streamlined assignment management and communication tools reduce administrative workload, allowing school staff to focus on strategic planning and educational development.Improved communication between teachers, students, and parents fosters a sense of community within the school, creating a conducive environment for learning.</p>
            </div>          
            <div className="bg-blue-800 gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={College} alt="pic"/>  
                <p className="my-5 text-4xl font-serif">College</p>
                <p className=''>The platform offers flexibility in learning, allowing college students to access course materials and collaborate with peers regardless of their physical location.Improved communication channels enable colleges to provide better support services, including counseling, career guidance, and academic assistance.</p>
            </div>          
            <div className="bg-blue-800 gap-4 m-2 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={Institution} alt="pic"/>        
                <p className="my-5 text-4xl font-serif">Institutions</p>
                <p className=''>The digitization of administrative processes and reduced reliance on physical resources contribute to cost savings for institutions.ClassroomConnect facilitates a holistic education delivery model, combining traditional teaching methods with innovative technology, ensuring that institutions stay relevant in the evolving educational landscape.</p>
            </div>          
        </div>
      </div>
      
    </div>
  );
}

export default Benefits;