import React, { useContext, useEffect, useState } from 'react';
import FacultyBar from './FacultyBar';
import Cookies from 'js-cookie';
import axios from 'axios';
import { UserContext } from '../../../store/userContext';


function StudentFaculty() {

  const {user} = useContext(UserContext);
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [facultyData,setFacultyData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }

  },[]);

  console.log("heyyy",user?.enrolledCourses)

  useEffect(() => {
    // const temp = ["65a6d84a5c5973d1f509ea3b","65aab8a0eb269294ed452b9b","65aaba19eb269294ed452bae", "65aabb30eb269294ed452bb2"];
    const fetchData = async () => {
      try {
        const { data } = await axios.post("https://assignment-portal-server.onrender.com/api/teacher", {
          coursesIdArr: user?.enrolledCourses
        });
        

        console.log('Faculty fetched successfully:', data)
        setFacultyData(data)
        
  
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[user])
  return (
    <>
      <div className='flex flex-col sm:h-full w-full p-2 overflow-hidden'>
        <div className='w-full h-20 pl-14 pr-24 flex items-center justify-between bg-[#245DE1] rounded-t-lg'>
          <p className='text-white text-lg font-semibold'>Photo</p>
          <p className='text-white text-lg font-semibold'>Faculty</p>
          {
            (windowWidth >= 800) && (
              <p className='text-white text-lg font-semibold'>Subject</p> 
            )
          }
        </div>
        <div className='hideScrollbar flex flex-col w-full h-full rounded-b-lg overflow-y-scroll bg-white'>
          {/* <FacultyBar windowWidth={windowWidth}/> */}
          <FacultyBar windowWidth={windowWidth} name="Abhay" subject="DATA STRUCTURES AND ALGORITHM" />
          <FacultyBar windowWidth={windowWidth} name="Rohan" subject="FUNDAMENTALS OF DATA STRUCTURES" />
          {/* {facultyData.length !== 0 && facultyData?.map((item, idx) => (
            <FacultyBar windowWidth={windowWidth} name="Rohan" subject="FUNDAMENTALS OF DATA STRUCTURES" />
            // <div >item</div>
            ))} */}
            
        </div>
      </div>
    </>
  )
}

export default StudentFaculty