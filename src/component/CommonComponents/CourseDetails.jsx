import React, { useContext, useEffect, useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../store/userContext';


function CourseDetails() {
  
  const {user} = useContext(UserContext);
  const {id} = useParams();
  
  const [data,setData] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://assignment-portal-server.onrender.com/api/course/${courseId}?role=student`
//         );
//         const data = await response.json();
//         setData(data);
//         // console.log(data);
//       } catch (error) {
//         console.error("Error getting Assignments : ", error);
//       }
//     };
//     fetchData();
// }, []);



  return (
    <div className=' w-full sm:h-full py-5 flex flex-col gap-10 text-3xl '>
      
    <h1 className='w-full h-20 text-[#245DE1] border-b border-[#245DE1] flex  items-center font-semibold pl-8'>All Material</h1>
      
    <div className='w-full sm:justify-items-center gap-4 flex flex-wrap justify-center sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:my-20'>
      <Link to={`/courses/coursedetails/files/${id}`}><button className=' h-52 w-52 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-start sm:justify-self-end'  value='Assignment'>Assignment</button></Link>
      <Link to='#'><button className=' h-52 w-52 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-end sm:justify-self-start'  value='Notes/Resources'>Notes/<br/>Resources</button></Link>
      <Link to='#'><button className=' h-52 w-52 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-start sm:justify-self-end'  value='Question Bank'>Question Bank</button></Link>
      <Link to='#'><button className=' h-52 w-52 sm:w-56 sm:h-56 shadow-md rounded-lg text-[#245DE1] bg-white hover:bg-[#245DE1] hover:text-white ease-linear hover:scale-105 duration-100 cursor-pointer text-[30px] xl:justify-items-end sm:justify-self-start'  value='Activities'>Activities</button></Link> 

    </div>


      <div className='w-full flex justify-center text-2xl font-normal'>
        <Link to='/courses'><button className='w-fit py-2 px-6' >Back</button></Link>
      </div>
    </div>
  );
}

export default CourseDetails;
