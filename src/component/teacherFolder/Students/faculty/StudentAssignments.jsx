import React from 'react'
import RecentSubmission from '../../../studentFolder/submission/RecentSubmission'
import { Link } from 'react-router-dom'

function StudentAssignments() {
  return (
    <div>
        <RecentSubmission/>
        <Link to='/students/studentdetails'><button>Back</button></Link>
    </div>
  )
}

export default StudentAssignments