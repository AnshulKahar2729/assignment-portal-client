import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Assignments() {

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
                  // console.log(data);
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


  return (
    <div className=" w-full sm:h-full flex flex-col items-center gap-5 h-screen p-2 ">
      <p className="w-full bg-[#245DE1] text-xl text-white text-center p-2 rounded-t-md">
        Assignments
      </p>
      <div className="w-full flex flex-col gap-2 overflow-y-scroll">
        {assignment.map((item) => (
          <div
            key={item._id}
            className="w-full flex flex-col bg-white gap-2 rounded-md p-1 sm:px-10 sm:py-4 text-[#245DE1]"
          >
            <div className="w-full flex flex-wrap sm:flex-row justify-between items-center">
              <p>Subject Name</p>
              <p>Teacher Name</p>
            </div>
            <div className="w-full flex flex-wrap sm:flex-row justify-between items-center">
              <p>File Name : {item.title}</p>
              <p>Date of Upload</p>
            </div>
            <div className="w-full flex flex-wrap sm:flex-row items-center gap-4">
              <a target="blank" href={item.file}>
                <button className="px-2 py-1 rounded-md text-sm">
                  Download
                </button>
              </a>
              <Link to="/submission/uploadPage">
                <button className="px-2 py-1 rounded-md text-sm bg-white border border-[#245DE1] text-[#245DE1]">
                  Submit Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments