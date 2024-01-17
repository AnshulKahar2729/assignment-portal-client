import React , {useState,useEffect} from 'react';
import { CgAddR } from "react-icons/cg";
import { Link } from 'react-router-dom';



function FilesPage() {
  
  return (
    <div className='w-full h-full flex flex-col py-4 gap-10'>
      <div className='w-full flex justify-between bg-slate-400 items-center p-4 rounded-lg'>
        <div>FileName : Name</div>
      </div>

      <div className='w-full flex flex-col p-4 rounded-lg gap-5 bg-slate-400'>
        <div>Assignments will be shown here</div>
      </div>

      <div className='w-full flex justify-center'><Link to='/courses/coursedetails'><button className='w-fit'>Back</button></Link></div>
    </div>
  )
}

export default FilesPage