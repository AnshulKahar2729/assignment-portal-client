import React, { useEffect, useState } from "react";
import UploadPage from "../teacherFolder/Courses/UploadPage";
import { Link } from "react-router-dom";

function FilesPage({ role }) {
  const [assignments, setAssignments] = useState([]);


  useEffect(() => {
    if (role === "teacher") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://assignment-portal-server.onrender.com/api/assignment?role=teacher"
          );
          const data = await response.json();
          setAssignments(data);
          console.log(data);
        } catch (error) {
          console.error("Error getting Assignments : ", error);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://assignment-portal-server.onrender.com/api/assignment?role=student"
          );
          const data = await response.json();
          setAssignments(data);
          console.log(data);
        } catch (error) {
          console.error("Error getting Assignments : ", error);
        }
      };
      fetchData();
    }
  }, []);

  // useEffect(() => {
  //   console.log("Assignment ------>", assignments);
  // }, [assignments]);

  return (
    <div className="w-full sm:h-full flex flex-col p-2 gap-10 overflow-y-scroll">
      <div className="w-full flex justify-between bg-white text-[#245DE1] items-center p-4 rounded-lg">
        <div className="w-full flex justify-between px-10 items-center text-xl font-semibold">
          Course : Subject
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
          <p className="w-full text-center font-semibold">
            Documents will be shown here Document
          </p>
          <div className="flex max-h-[600px] flex-col overflow-y-scroll bg-[#245DE1]">
            {assignments.map((item) => (
              <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-white border-b ">
                <div className="flex flex-col gap-1">
                  <p>Submitted : {item.title}</p>
                  <p>Course : {item.title}</p>
                  <a href={item.file} target="blank">Download</a>
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

export default FilesPage;
