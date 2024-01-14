import React from 'react'
import RecentSubmission from './RecentSubmission'
import PendingSubmission from './PendingSubmission'

function StudentSubmission() {
  return (
    <div className='w-full h-screen grid-cols-1 md:grid-cols-2 flex md:flex-row flex-col py-4 justify-between'>
      <RecentSubmission/>
      <PendingSubmission/>
    </div>
  )
}

export default StudentSubmission