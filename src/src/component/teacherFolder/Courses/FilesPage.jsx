import React , {useState,useEffect} from 'react';
import { CgAddR } from "react-icons/cg";
import UploadPage from './UploadPage';



function FilesPage({Data,filePage,setFilePage,courseDirectId,setUpload,file}) {
  const [name,setName] = useState();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-portal-server.onrender.com/api/assignment?role=teacher");
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

  function handleBackBtn () {
    setFilePage(null);
  }

  useEffect(() => {
    const selectedCourse = Data.find(course => course.id === courseDirectId);
    setName(selectedCourse.courseName);
  },[courseDirectId,filePage])

  console.log('file : ',file)


  return (
    <div className="w-full sm:h-full flex flex-col py-4 gap-10 overflow-y-scroll">
      <div className="w-full flex justify-between bg-white text-[#245DE1] items-center p-4 rounded-lg">
        <div className="w-full flex justify-between px-10 items-center text-xl font-semibold">
          {filePage} : {name}
          <button className="w-fit" onClick={handleBackBtn}>
            Back
          </button>
        </div>
      </div>

      <div>
        <UploadPage />
      </div>

      <div className="w-full flex flex-col p-4 rounded-lg gap-5 bg-white text-[#245DE1]">
        <div className="flex flex-col p-4">
          <p className="w-full text-center font-semibold">
            {filePage}s will be shown here {file}
          </p>
          <div className="flex max-h-[600px] flex-col overflow-y-scroll bg-[#245DE1]">
            {assignments.map((item) => (
              <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-white border-b ">
                <div className="flex flex-col gap-1">
                  <p>Submitted : {item.title}</p>
                  <p>Course : {item.title}</p>
                </div>
                <p>Date : Date of Submission</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center"></div>
    </div>
  );
}

export default FilesPage