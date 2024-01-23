// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import AssignmentItem from './AssignmentItem';

// function Assignments() {

//     const [assignments,setAssignments] = useState([]);

//     useEffect(() => {
//         try{
//             const fetchData = async () => {
//                 try {
//                   const response = await fetch(
//                     "https://assignment-portal-server.onrender.com/api/assignment?role=student"
//                   );
//                   const data = await response.json();
//                   setAssignments(data);
//                   console.log(data);
//                 } catch (error) {
//                   console.error("Error getting Assignments : ", error);
//                 }
//             };
//             fetchData();
            
//         } catch(error){
//             console.error('Error : ',error)
//         }
//     },[])

//   return (
//     <div className=" w-full sm:h-full flex flex-col items-center gap-5 h-screen p-2 ">
//       <p className="w-full bg-[#245DE1] text-xl text-white text-center p-2 rounded-t-md">
//         Assignments
//       </p>
//       <div className="w-full flex flex-col gap-2 overflow-y-scroll">
//         {assignments?.map((item) => (
//           <AssignmentItem key={item._id} name={item.title} url={item.file} assignmentId={item._id}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Assignments






















import React, { useContext } from 'react'
import AssignmentItem from './AssignmentItem';
import { UserContext } from '../../store/userContext';

function Assignments() {

  const {user} = useContext(UserContext);
  const Courses = user.enrolledCourses;

  return (
    <div className=" w-full sm:h-full flex flex-col items-center gap-5 h-screen p-2 ">
      <p className="w-full bg-[#245DE1] text-xl text-white text-center p-2 rounded-t-md">
        Assignments
      </p>
      <div className="w-full flex flex-col gap-2 overflow-y-scroll">
        {Courses?.map((course) => (
          <div key={course.name} className="bg-[#245DE1] rounded-md p-2 w-full">
            <p className="text-white">{course.name}</p>
            <div className="bg-white rounded-md w-full flex flex-col gap-2">
              {course.assignments.map((assignment) => (
                <AssignmentItem key={assignment._id} name={assignment.title} url={assignment.file} assignmentId={assignment._id}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments