import React, {useState} from 'react'
import Modal from 'react-modal';
import { SlCloudUpload } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { IoMdCloudDone } from "react-icons/io";


const AssignmentItem = ({name, url, assignmentId}) => {
    const [file, setFile] = useState(null);
    const [displayFile, setDisplayFile] = useState(null);
    const [title,setTitle] = useState();
    const [isDraggedOver, setIsDraggedOver] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // modal 
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    //   file upload 
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
      
          try {
            const response = await fetch(
    
              "https://assignment-portal-server.onrender.com/api/assignment?role=teacher",
    
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
        
        console.log(assignmentId)

  return (
          <>
          <div className="w-full flex flex-col bg-white gap-2 rounded-md p-1 sm:px-10 sm:py-4 text-[#245DE1]">
            <div className="w-full flex flex-wrap sm:flex-row justify-between items-center">
              <p>Subject Name</p>
              <p>Teacher Name</p>
            </div>
            <div className="w-full flex flex-wrap sm:flex-row justify-between items-center">
              <p>File Name : {title}</p>
              <p>Date of Upload</p>
            </div>
            <div className="w-full flex flex-wrap sm:flex-row items-center gap-4">
              <a target="blank" href={file}>
                <button className="px-2 py-1 rounded-md text-sm">
                  Download
                </button>
              </a>
                <button onClick={openModal} className="px-2 py-1 rounded-md text-sm bg-white border border-[#245DE1] text-[#245DE1]">
                  Submit Now
                </button>
            </div>
          </div>
          {/* modal  */}
          <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='z-50 right-0 bg-gray-400 ml-auto w-1/2 h-full'
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div className="w-full h-full py-1 sm:px-4 sm:py-4  rounded-lg bg-white flex flex-col gap-3 text-[#245DE1]">
                    <form onSubmit={handleFormSubmit} className="w-full h-full grid gap-2">
                        <p className="w-full border-b text-xl font-bold text-center py-4">
                        Upload Assignments
                        </p>

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
                        <div className='w-full flex flex-col text-center gap-3 mt-2'>
                        <label><b>Assignment Name</b></label>
                        <div className='flex gap-2'>
                            <input
                            className="border py-2 px-3 w-full rounded-md outline-none"
                            type="text"
                            placeholder="Assignment Title"
                            name="file"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            />
                            <button
                            className="upload border rounded-md hover:bg-[#0c4adc]"
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
            </Modal> 

          </>


  )
}

export default AssignmentItem