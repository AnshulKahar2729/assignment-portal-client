// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {Assignments} from '../datas/Data';
// import { UserContext } from '../../../store/userContext';

// function PendingSubmission() {
//   const pendingAssignments = Assignments.filter((assignment) => !assignment.completed);
//   const {user} = useContext(UserContext);

//   // useEffect(() => {
//   //   try{
//   //     const fetchData = async () => {
//   //       const response = await fetch('https://assignment-portal-server.onrender.com/api/submittedassignment?role=student');
//   //       const data = await response.json();
//   //     }
//   //   } catch(error){
//   //     console.log('Error : ',error)
//   //   }
//   // },[])

//   console.log('User :::: > ',user);
//   console.log('Courses :::: > ',user.enrolledCourses );
//   console.log('Assignments :::: > ',user.enrolledCourses[0].assignments );




//   return (
//     <div className='w-full rounded-lg bg-white flex flex-col gap-3 text-[#245DE1] overflow-hidden'>
//       <p className='w-full text-center text-white border-b p-4 border-[#245DE1] bg-[#245DE1] font-bold'>
//         Pending Submissions
//       </p>
//       <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]'>
//         {pendingAssignments.map((assignment, index) => (
//           <Link to='/submission/uploadPage' key={index}>
//             <div className='w-[95%] flex sm:flex-row flex-wrap justify-between p-2 bg-white border-b border-[#245DE1] cursor-pointer hover:bg-[#245DE1] hover:text-white duration-200 hover:rounded-lg'>
//               <div className='flex flex-col gap-1'>
//                 <p>Submitted: {assignment.title}</p>
//                 <p>Course: {assignment.title}</p>
//               </div>
//               <p>Date: {assignment.date}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PendingSubmission;





































import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../store/userContext';

function PendingSubmission() {
  const {user} = useContext(UserContext);
  const Courses = user.enrolledCourses;

  return (
    <div className="w-full rounded-lg bg-white flex flex-col gap-3 text-[#245DE1] overflow-hidden">
      <p className="w-full text-center text-white border-b p-4 border-[#245DE1] bg-[#245DE1] font-bold">
        Pending Submissions
      </p>
      <div className="hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]">
          {Courses.map((item) => (
            <div key={item.name} className='bg-[#245DE1] rounded-md p-2 w-full'>
              <p className='text-white'>{item.name}</p>
              <div className='bg-white rounded-md w-full flex flex-col gap-2'>
                {item.assignments.map((assignment) => (
                  <div key={assignment} className='text-[#245DE1] border-b border-[#245DE111]'>
                    <p>Course Name : {item.name}</p>
                    <p>Assignment Name : {assignment}</p>
                    <p>Date : </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PendingSubmission;
