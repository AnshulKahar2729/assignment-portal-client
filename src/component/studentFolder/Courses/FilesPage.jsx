import React , {useState,useEffect} from 'react';
import { CgAddR } from "react-icons/cg";



function FilesPage({Data,filePage,setFilePage,courseDirectId,setUpload,file}) {
  const [name,setName] = useState();
  

  function handleBackBtn () {
    setFilePage(null);
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
      </div>

      <div className='w-full flex flex-col p-4 rounded-lg gap-5 bg-slate-400'>
        <div>{filePage}s will be shown here {file}</div>
      </div>

      <div className='w-full flex justify-center'><button className='w-fit' onClick={handleBackBtn}>Back</button></div>
    </div>
  )
}

export default FilesPage