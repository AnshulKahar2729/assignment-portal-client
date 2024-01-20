import React from 'react'
import RecentSubmission from '../../../teacherFolder/Students/RecentSubmission'
import { Link } from 'react-router-dom'

function StudentAssignments() {
  return (
    <div className=''>
        <RecentSubmission/>
        <Link className='m-1 flex items-center justify-center ' to='/assignments/studentdetails'><button className='rounded-md '>Back</button></Link>
    </div>
  )
}

export default StudentAssignments