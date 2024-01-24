import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../store/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

function RecentSubmission({enrolledCourses}) {
  // const [assignments, setAssignments] = useState([]);
  // const {user} = useContext(UserContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.post("http://localhost:4000/api/assignment/submittedassignment", {
  //         studentId: user.studentId
  //       });
  
  //       if (data) {
  //         console.log(data);
  //       }
  //       console.log(data)
  
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   // console.log('Assignment ------>',assignments);
  // }, [assignments]);


  return (
    <div className="w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden border shadow-lg ">
      <div className="w-full rounded-lg ">
        <p className="w-full text-center font-bold  text-white p-[15px] bg-[#245DE1] border-b">Recent Submissions</p>
        <div className="hideScrollbar flex flex-col px-4 gap-3 w-full  rounded-lg overflow-y-scroll h-[300px] sm:h-[450px] xl:h-[590px]">
            {
              enrolledCourses.map((course, idx) => (
                <div>
                  {/* {
                    course.assignments.map((assignment, idx) => (
                      <div className='border-b-2 p-4 border-blue-100'>
                        <p><span className='text-gray-600'>Subject:</span> <span className='font-bold'>{course.name}</span></p>
                        <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>{assignment.title}</span></p>
                        <div className='flex justify-between items-center'>
                          <Link to={`/submission/uploadPage/${assignment._id}`}><button className='mt-2 text-sm bg-blue-600 hover:bg-blue-400 transition-all rounded-sm'>SUBMIT</button></Link>
                          <p>Submitted on: <span className='text-green-600'>24th Jan</span></p>
                        </div>
                      </div>
                    ))
                  } */}
                  {
                    course.assignments.map((assignment, idx)=> (
                      <div>
                        {
                          assignment.submissions.map((submission, idx) => (
                            <div className='border-b-2 p-4 border-blue-100'>
                            <p><span className='text-gray-600'>Subject:</span> <span className='font-bold'>{course.name}</span></p>
                            <p><span className='text-gray-600'>Assignment:</span> <span className='font-bold'>{assignment.title}</span></p>
                            <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>{submission.title}</span></p>
                            <div className='flex justify-between items-center'>
                              <a href={submission.file} target="_blank"><button className='mt-2 text-sm bg-blue-600 hover:bg-blue-400 transition-all rounded-sm'>Download</button></a>
                              <p>Submitted on: <span className='text-green-600'>24th Jan</span></p>
                            </div>
                          </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default RecentSubmission;












































/* import React,{useEffect, useState} from 'react'

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [displayFile, setDisplayFile] = useState(null);
    const [title,setTitle] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      const response = await fetch(
        "http://localhost:4000/api/assignment/?role=teacher",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setDisplayFile(data.URL);

      console.log(data.URL)
      console.log('title : ',title)
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  


  function handleUploadClick () {
    console.log("Upload Clicked");
  }


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        <input type="text" placeholder='Assignment Title' name="file" onChange={(e) => {setTitle(e.target.value)}} />
        <button className='upload' onClick={handleUploadClick} type="submit">Upload</button>
      </form>

      {displayFile && <a target='_blank' href={displayFile}> DOWNLOAD FILE </a>}
    </div>
  );
  
}

export default UploadPage */
