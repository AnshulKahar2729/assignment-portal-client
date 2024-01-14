import React , {useState,useEffect} from 'react';
import { CgAddR } from "react-icons/cg";
import UploadPage from './UploadPage';

// title: ""
// 	file: "",
// 	startDate: "",
// 	endDate: "",
// 	createdBy: [], //teacher details
// 	submissions: [{},{},....], //Array of students who submitted assignment


const BASE_URL ='https://assignment-portal-server.onrender.com/';


function FilesPage({Data,filePage,setFilePage,courseDirectId,setUpload,file}) {
  const [name,setName] = useState();
  const [assignments, setAssignments] = useState([]);
  const [title,setTitle] = useState();
  

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/assignment`);
        const data = await response.json();
        setAssignments(data);
        console.log(data);
      } catch (error) {
        console.error("Error getting Assignments : ", error);
      }
    }
    fetchData();
  }
,[])

  // console.log('file : ',file)
  console.log('Assignments',assignments);


  return (
    <div className='w-full h-full flex flex-col py-4 gap-10'>
      <div className='w-full flex justify-between bg-slate-400 items-center p-4 rounded-lg'>
        <div>{filePage} : {name}</div>
        <button className='text-3xl' onClick={handleUploadBtn}><CgAddR/></button>
      </div>

      <div>
        <UploadPage setAssignments={setAssignments}/>
      </div>

      <div className='w-full flex flex-col p-4 rounded-lg gap-5 bg-slate-400 overflow-y-auto'>
        <p className='w-full text-center font-bold '>Uploaded {filePage}</p>
        {
          assignments.map((item) => (
            <div key={item._id} className='w-full flex justify-center'>
              <p>{item.title}</p>
              <a href={item.file}>View</a>
            </div>
          ))
        }
      </div>

      <button onClick={handleBackBtn}>Back</button>
    </div>
  )
}

export default FilesPage
