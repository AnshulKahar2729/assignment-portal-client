import React , {useState,useEffect} from 'react';

function FilesPage({Data,filePage,setFilePage,courseDirectId,setUpload,file}) {
  const [name,setName] = useState();
  

  function handleBackBtn () {
    setFilePage(null);
  }

  function handleUploadBtn () {
    setUpload(true);
  }

  useEffect(() => {
    const selectedCourse = Data.find(course => course.id === courseDirectId);
    setName(selectedCourse.courseName);
  },[courseDirectId,filePage])

  console.log('file : ',file)


  return (
    <div className='w-full h-full flex flex-col py-4 gap-10'>
      <div className='w-full flex justify-between bg-slate-400 items-center p-4 rounded-lg'>
        <div>{filePage} : {name}</div>
        <button onClick={handleUploadBtn}>+</button>
      </div>

      <div className='w-full flex flex-col p-4 rounded-lg gap-5 bg-slate-400'>
        <p className='w-full text-center font-bold '>Uploaded {filePage}</p>
        <div>{filePage}s will be shown here {file}</div>
      </div>

      <button onClick={handleBackBtn}>Back</button>
    </div>
  )
}

export default FilesPage