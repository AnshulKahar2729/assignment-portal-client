import React from 'react'
import RecentSubmission from './RecentSubmission'
import PendingSubmission from './PendingSubmission'
import UploadPage from './UploadPage'

function StudentSubmission() {
  return (
    <div className='w-full xl:h-full grid-cols-1 xl:grid-cols-2 flex xl:flex-row flex-col py-2 px-2 justify-center gap-3 '>
      <PendingSubmission/>
      <RecentSubmission/>
    </div>
  )
}

export default StudentSubmission