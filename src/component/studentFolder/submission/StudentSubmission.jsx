import React, { useContext, useEffect, useState } from 'react'
import RecentSubmission from './RecentSubmission'
import PendingSubmission from './PendingSubmission'
import UploadPage from './UploadPage'
import { UserContext } from '../../../store/userContext';
import axios from 'axios';

function StudentSubmission() {

  const {user} = useContext(UserContext);
    const [allAssignments, setAllAssignments] = useState([]);
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const [pendingAssignments, setPendingAssignments] = useState([]);

    
    useEffect(() => {
      setAllAssignments(user.enrolledCourses)
    }, []);
    // console.log("all:" ,allAssignments)
    // console.log("submitted:" ,submittedAssignments)
    // console.log("pending:" ,submittedAssignments)
    // function getAllSubmissions() {
    //     for(var i=0; i< user.enrolledCourses?.length; i++){
    //         for(var j =0; j<user.enrolledCourses.assignments?.length; j++){
    //           setAllAssignments(...allAssignments);
    //           // setAllAssignments(...allAssignments);
    //         }
    //     }
    //     console.log("All Assignments:", allAssignments)
    // }

    // // submitted 
    // function getSubmittedAssignments() {
    //   // http://localhost:4000/api/assignment/submittedassignment
    //   const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get("https://assignment-portal-server.onrender.com/api/assignment?role=student", {
    //       studentId: user.studentId
    //     });
  
    //     if (data) {
    //       setSubmittedAssignments(data);
    //       console.log("submitted assignments:", data)
    //     }
  
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    // }

    // // pending 
    // function getPendingAssignments() {
    //   // http://localhost:4000/api/assignment/submittedassignment
    //   const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get("https://assignment-portal-server.onrender.com/api/assignment", {
    //       // studentId: user.studentId
    //     });
  
    //     if (data) {
    //       setPendingAssignments(data);
    //       console.log("submitted assignments:", data)
    //     }
  
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    // }
        
    // useEffect(() => {
    //     getAllSubmissions();
    //     getSubmittedAssignments();
    //     getPendingAssignments();
    // }, []);

  return (
    <div className='w-full xl:h-full grid-cols-1 xl:grid-cols-2 flex xl:flex-row flex-col py-2 px-2 justify-center gap-3 '>
      <PendingSubmission enrolledCourses={user.enrolledCourses} />
      <RecentSubmission enrolledCourses={user.enrolledCourses} />
    </div>
  )
}

export default StudentSubmission