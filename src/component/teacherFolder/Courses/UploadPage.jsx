import React,{useContext, useState} from 'react';
import { SlCloudUpload } from "react-icons/sl";
import { IoMdCloudDone } from "react-icons/io";
import { UserContext } from '../../../store/userContext';

function UploadPage({courseId}) {

  
  const {user} = useContext(UserContext);
  
    
  const [file, setFile] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);
  const [title,setTitle] = useState();
  const [endDate,setEndDate] = useState("12");

  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("courseId", courseId);
      formData.append("teacherId", user._id);
      formData.append("endDate", endDate);

      console.log(title, courseId, user.teacherId, endDate);
  
      try {
        const response = await fetch(
          "http://localhost:4000/api/assignment?role=teacher",
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
      window.location.reload();
      console.log("Upload Clicked");
    }

    console.log("File ----->",file)


  return (
    <div className="w-full h-full py-1 sm:px-4 sm:py-4  rounded-lg bg-white flex flex-col gap-3 text-[#245DE1]">
      <form onSubmit={handleFormSubmit} className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-2">
        

        <div
          style={{border:"dashed blue 3px"}}
          className={`zone ${
            isDraggedOver ? "hover" : ""
          } bg-white  border text-blue-600 h-[300px] sm:h-[300px] w-[300px] sm:w-[300px] rounded-lg shadow-2xl mx-auto`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <i className="text-5xl">{!file ? <SlCloudUpload /> : <IoMdCloudDone />}</i>
            <div className="text-center">Drag and drop your file here</div>
            <span className="mb-3">OR</span>
            <div className="">
              <label
                htmlFor="file"
                className="file-label text-white bg-[#245DE1] hover:bg-[#0c4adc] py-2 px-4 rounded cursor-pointer"
              >
                Select file
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                name="file"
                id="file"
                className="hidden"
              />
            </div>
          </div>
        </div>



        <div className='flex flex-col gap-10'>
            <p className="w-full border-b text-xl font-bold text-center py-4">
              Upload Assignments
            </p>
            <div className='flex flex-col text-center gap-3 mt-2'>
              <label><b>Assignment Name</b></label>
              <input
                className="border py-2 px-3 w-full rounded-md outline-none"
                type="text"
                placeholder="Assignment Title"
                name="file"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
              
            <div className="h-fit justify-center flex">
              <button
                className="upload border rounded-md hover:bg-[#0c4adc]"
                onClick={handleFormSubmit}
                type="submit"
              >
                Upload
              </button>
            </div>
        </div>



      </form>

      {displayFile && (
        <a target="_blank" href={displayFile}>
          {" "}
          DOWNLOAD FILE{" "}
        </a>
      )}
    </div>
  );
}

export default UploadPage