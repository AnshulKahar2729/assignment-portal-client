import React, { useContext, useEffect, useState } from "react";
import UploadPage from "../teacherFolder/Courses/UploadPage";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../store/userContext";

function FilesPage({ role }) {
  
  const {user} = useContext(UserContext);
  const { courseId } = useParams();

  console.log("enrolled",user.enrolledCourses)


  return (
    <div className="w-full sm:h-full flex flex-col p-2 gap-10 overflow-y-scroll">
      <div className="w-full flex justify-between bg-white text-[#245DE1] items-center p-4 rounded-lg">
        <div className="w-full flex justify-between px-10 items-center text-xl font-semibold">
          Course : {user.enrolledCourses[0].name}
          <Link to="/courses/coursedetails">
            <button className="w-fit">Back</button>
          </Link>
        </div>
      </div>

      {role === "teacher" ? (
        <div>
          <UploadPage courseId={courseId} />
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex flex-col p-4 rounded-lg  max-w-[600px] gap-5 bg-white text-[#245DE1]">
        <div className="flex flex-col p-4">
          {/* <p className="w-full text-center font-semibold">
            Documents will be shown here Document
          </p> */}

          <div className="flex max-h-[600px] flex-col overflow-y-auto">
          {
              user.enrolledCourses.map((course, idx) => (
                <div>
                  {
                    course.assignments.map((assignment, idx) => (
                      <div className='border-b-2 p-4 border-blue-100'>
                        <p><span className='text-gray-600'>Subject:</span> <span className='font-bold'>{course.name}</span></p>
                        <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>{assignment.title}</span></p>
                        <div className='flex justify-between items-center'>
                          <Link to={`/submission/uploadPage/${assignment._id}`}><button className='mt-2 text-sm bg-blue-600 hover:bg-blue-400 transition-all rounded-sm'>SUBMIT</button></Link>
                          <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <p className="text-center p-10">
            {user.enrolledCourses == [] ? "No assignments are posted yet!" : ""}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center"></div>
    </div>
  );
}

export default FilesPage;
