import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Assignments({role}) {

    const [assignment,setAssignment] = useState([]);

    useEffect(() => {
        try{
            const fetchData = async () => {
                try {
                  const response = await fetch(
                    "https://assignment-portal-server.onrender.com/api/assignment?role=teacher"
                  );
                  const data = await response.json();
                  setAssignment(data);
                  console.log(data);
                } catch (error) {
                  console.error("Error getting Assignments : ", error);
                }
            };
            fetchData();
            
        } catch(error)
        {
            console.error('Error : ',error)
        }
    },[])

    console.log('Jai Shree Ram ---->',assignment)



    const getFileTypeFromUrl = (url) => {
        const extension = url.split('.').pop().toLowerCase();
    
        // You can add more file types as needed
        if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
          return 'image';
        } else if (['mp4', 'avi', 'mkv'].includes(extension)) {
          return 'video';
        } else if (['pdf'].includes(extension)) {
          return 'pdf';
        } else {
          return 'unknown';
        }
      };



  return (
    <div className=" w-full sm:h-full flex flex-col items-center gap-5 overflow-y-scroll p-2 ">
      {role ? (
        <div className="w-full bg-green flex justify-between p-4 bg-white rounded-lg sm:px-10 items-center">
          <p className="text-2xl text-[#245DE1] font-semibold">Resourses</p>
          <Link to="/courses/coursedetails/files">
            <button className="rounded-md text-lg bg-green-500">
              Create Assignment
            </button>
          </Link>
        </div>
      ) : null}

      {/* {assignment.map((item) => (
        
          <div className="bg-white w-full h-fit rounded-lg border border-[#245DE1]">
            <div className="h-14 p-5  flex justify-between items-center bg-[#245DE1] text-white  rounded-t-lg">
              <p className="text-md line-clamp-1 sm:line-clamp-2">Posted material : {item.title}</p>
              {
                role === "teacher" ? <Link to='/assignments/studentdetails'><button className='bg-white rounded-md text-[12px] sm:text-lg py-2 px-4 text-[#245DE1] hover:text-green-500'>Student's Uploads</button></Link> : null
              }
            </div>
            <div className="p-5 gap-3 grid">
              <p className="w-full text-sm font-semibold text-[#245DE1]">
                Posted : 12th Jan 2024
              </p>
              <div className="w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden">
                  <div className="cursor-pointer w-[35%] h-full border-r  bg-[#245DE1] text-white border-[#245DE1]">
                    <a
                      className="w-full h-full flex items-center justify-center"
                      target="blank"
                      href={item.file}
                    >
                      Download
                    </a>
                  </div>
                  <div className="w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]">
                    <p>{item.title}</p>
                    <p>{getFileTypeFromUrl(item.file)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      ))} */}
                <div className="bg-white w-full h-fit rounded-lg border border-[#245DE1]">
            <div className="h-14 p-5  flex justify-between items-center bg-[#245DE1] text-white  rounded-t-lg">
              <p className="text-md line-clamp-1 sm:line-clamp-2">Posted material : FDS Assignment</p>
              <Link to='/assignments/studentdetails'><button className='bg-white rounded-md text-[12px] sm:text-lg py-2 px-4 text-[#245DE1] hover:text-green-500'>Student's Uploads</button></Link>
            </div>
            <div className="p-5 gap-3 grid">
              <p className="w-full text-sm font-semibold text-[#245DE1]">
                Posted : 12th Jan 2024
              </p>
              <div className="w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden">
                  <div className="cursor-pointer w-[35%] h-full border-r  bg-[#245DE1] text-white border-[#245DE1]">
                    <a
                      className="w-full h-full flex items-center justify-center"
                      target="blank"
                      href=''
                    >
                      Download
                    </a>
                  </div>
                  <div className="w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]">
                    <p>BXE Assignment</p>
                    {/* <p>{getFileTypeFromUrl(item.file)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-fit rounded-lg border border-[#245DE1]">
            <div className="h-14 p-5  flex justify-between items-center bg-[#245DE1] text-white  rounded-t-lg">
              <p className="text-md line-clamp-1 sm:line-clamp-2">Posted material : Physics Assignment</p>
              <Link to='/assignments/studentdetails'><button className='bg-white rounded-md text-[12px] sm:text-lg py-2 px-4 text-[#245DE1] hover:text-green-500'>Student's Uploads</button></Link>
            </div>
            <div className="p-5 gap-3 grid">
              <p className="w-full text-sm font-semibold text-[#245DE1]">
                Posted : 14th Jan 2024
              </p>
              <div className="w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden">
                  <div className="cursor-pointer w-[35%] h-full border-r  bg-[#245DE1] text-white border-[#245DE1]">
                    <a
                      className="w-full h-full flex items-center justify-center"
                      target="blank"
                      // href={item.file}
                    >
                      Download
                    </a>
                  </div>
                  <div className="w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]">
                    <p>Chem Assignment</p>
                    {/* <p>{getFileTypeFromUrl(item.file)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full h-fit rounded-lg border border-[#245DE1]">
            <div className="h-14 p-5  flex justify-between items-center bg-[#245DE1] text-white  rounded-t-lg">
              <p className="text-md line-clamp-1 sm:line-clamp-2">Posted material : BEE Assignment</p>
              <Link to='/assignments/studentdetails'><button className='bg-white rounded-md text-[12px] sm:text-lg py-2 px-4 text-[#245DE1] hover:text-green-500'>Student's Uploads</button></Link>
            </div>
            <div className="p-5 gap-3 grid">
              <p className="w-full text-sm font-semibold text-[#245DE1]">
                Posted : 9th Jan 2024
              </p>
              <div className="w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden">
                  <div className="cursor-pointer w-[35%] h-full border-r  bg-[#245DE1] text-white border-[#245DE1]">
                    <a
                      className="w-full h-full flex items-center justify-center"
                      target="blank"
                      href=''
                    >
                      Download
                    </a>
                  </div>
                  <div className="w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]">
                    <p>Assignemt</p>
                    {/* <p>{getFileTypeFromUrl(item.file)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Assignments