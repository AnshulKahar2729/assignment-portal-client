import React, { useEffect, useState } from "react";

function RecentSubmission() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-portal-server.onrender.com/api/submittedassignment?role=student");
        const data = await response.json();
        setAssignments(data);
        console.log(data);
      } catch (error) {
        console.error("Error getting Assignments : ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Assignment ------>',assignments);
  }, [assignments]);

  return (
    <div className="w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden border shadow-lg">
      <div className="w-full rounded-lg ">
        <p className="w-full text-center font-bold  text-white p-[15px] bg-[#245DE1] border-b">Recent Submissions</p>
        <div className="hideScrollbar flex flex-col px-4 gap-3 w-full  rounded-lg overflow-y-scroll h-[300px] sm:h-[450px] xl:h-[590px]">
          {assignments.map((item) => (

            <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-[#245DE1] border-b border-[#245DE1]">
              <div className="flex flex-col gap-1">
                <p>Submitted : {item.title}</p>
                <p>Course : {item.title}</p>
              </div>
              <div>
                <a className="bg-[#245DE1] text-white px-2 py-1 text-sm rounded-md" target="blank" href={item.file}>Download</a>
                <p>Date : Date of Submission</p>
              </div>
            </div>

          ))}
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
