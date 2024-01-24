import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../store/userContext';
import { user } from './Datas/StudentData';

function StudentInfo() {
  const { user } = useContext(UserContext);
//   const [enrolledStudents, setEnrolledStudents] = useState([]);
//   const [isEnrolledSet, setIsEnrolledSet] = useState(false);

//   useEffect(() => {
//     const fetchEnrolledStudents = async () => {
//       try {
//         if (user && user.assignedCourses && !isEnrolledSet) {
//           // Set the flag to true to prevent unnecessary re-renders
//           setIsEnrolledSet(true);

//           const updatedEnrolledStudents = [];

//           user.assignedCourses.forEach(course => {
//             if (course.studentsEnrolled) {
//               const studentNames = course.studentsEnrolled.map(student => student.name);
//               updatedEnrolledStudents.push({
//                 courseName: course.name,
//                 students: studentNames,
//               });
//             }
//           });

//           setEnrolledStudents(updatedEnrolledStudents);
//         }
//       } catch (error) {
//         console.error('Error fetching enrolled students:', error);
//       }
//     };

//     fetchEnrolledStudents();
//   }, [user, isEnrolledSet]);
console.log("Try user:", user.assignedCourses)

  return (
    <div className="m-2 h-[680px] bg-white p-2 rounded-md flex flex-col gap-3 overflow-hidden">
      <h2 className="w-full text-center bg-[#245DE1] text-white rounded-md p-2">
        Enrolled Students
      </h2>
      <div className='w-full overflow-y-scroll'>
        {user.assignedCourses.length > 0 ? (
          <div className="w-full rounded-md p-3">
            {user.assignedCourses.map((course, index) => (
              <div key={index} className="mb-4 bg-[#245De1] rounded-md p-1">
                <h3 className="text-[#245DE1] font-bold border-b border-[#245DE1] text-lg bg-white p-2">{course.name}</h3>
                <ul className="flex-flex-col gap-1 bg-white">
                  {course.studentsEnrolled.map((student, studentIndex) => (
                    <li className='p-2 border-b' key={studentIndex}>{student.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No students enrolled in any course</p>
        )}
      </div>
    </div>
  );
}

export default StudentInfo;