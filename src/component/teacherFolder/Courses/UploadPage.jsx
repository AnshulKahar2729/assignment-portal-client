import React,{useState} from 'react'

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
            <input type='file' name='file' onChange={handleUpload}/>
            <button onClick={handleSubmit} className='bg-white hover:bg-gray-300'>Upload</button>
        </form>

        <div className='w-full justify-center flex'><button className='w-fit' value={false} onClick={handleBackBtn}>Back</button></div>
    </div>
  )
}

export default UploadPage