import React, { useEffect, useState } from "react";
import UploadPage from "../teacherFolder/Courses/UploadPage";
import { Link, useParams } from "react-router-dom";

function FilesPage({ role }) {
  const [data, setData] = useState([]);
  const { courseId } = useParams();


  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://assignment-portal-server.onrender.com/api/course/${courseId}?role=student`
  //         );
  //         const data = await response.json();
  //         setData(data);
  //         console.log("vikasssssssssssssssssss:", data);
  //       } catch (error) {
  //         console.error("Error getting Assignments : ", error);
  //       }
  //     };
  //     fetchData();
  // }, []);


  // console.log("hey this is id", courseId)

  // useEffect(() => {
  //   console.log("Assignment ------>", assignments);
  // }, [assignments]);

  return (
    <div className="w-full sm:h-full flex flex-col p-2 gap-10 overflow-y-scroll">
      <div className="w-full flex justify-between bg-white text-[#245DE1] items-center p-4 rounded-lg">
        <div className="w-full flex justify-between px-10 items-center text-xl font-semibold">
          Course : {data.name}
          <Link to="/courses/coursedetails">
            <button className="w-fit">Back</button>
          </Link>
        </div>
      </div>

      {role === "teacher" ? (
        <div>
          <UploadPage />
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex flex-col p-4 rounded-lg gap-5 bg-white text-[#245DE1]">
        <div className="flex flex-col p-4">
          {/* <p className="w-full text-center font-semibold">
            Documents will be shown here Document
          </p> */}
          <div className="flex max-h-[600px] flex-col overflow-y-scroll">
            {data.assignments?.map((item) => (
              <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-white border-b ">
                <div className="flex flex-col gap-1">
                  <p>Submitted : {item.title}</p>
                  <p>Course : {item.title}</p>
                </div>
                <div>
                  <a className="text-[#245DE1] bg-white px-2 py-1 text-sm rounded-md" target="blank" href={item.file}>Download</a>
                  <p>Date : Date of Submission</p>
              </div>
              </div>
            ))}
          </div>
          <p className="text-center p-10">
            {data.assignments != [] && "No assignments are posted yet!"}</p>
        </div>
      </div>

      <div className="w-full flex justify-center"></div>
    </div>
  );
}

export default FilesPage;
