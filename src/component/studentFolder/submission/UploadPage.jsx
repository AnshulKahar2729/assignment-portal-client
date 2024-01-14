import React,{useState} from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadPage({setUpload,file,setFile}) {
    


    function handleBackBtn (e) {
        e.preventDefault();
        setUpload(false);
    }
    
    function handleUpload (e) {
        e.preventDefault();
        setFile(...file,e.target.value);
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        setUpload(false);
    }


  return (
    <div className='w-full flex flex-col gap-10 py-5'>
        <form className='w-full flex justify-between bg-slate-400 items-center p-4 rounded-lg'>
            <div>
             <input type='file' name='file' onChange={handleUpload}/>
             <input type='text' placeholder='Name of the file' />
             <p>Submission Date : </p><input type='date' placeholder='Deadline Date' />
            </div>
            <button onClick={handleSubmit} className='bg-white hover:bg-gray-300 flex text-2xl items-center gap-2'><FaCloudUploadAlt/> Upload</button>
        </form>

        <div className='w-full justify-center flex'><button className='w-fit' value={false} onClick={handleBackBtn}>Back</button></div>
    </div>
  )
}

export default UploadPage