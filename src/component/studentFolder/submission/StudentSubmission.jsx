import React from 'react'
import RecentSubmission from './RecentSubmission'
import PendingSubmission from './PendingSubmission'
import UploadPage from './UploadPage'

function StudentSubmission({setOpenUploadPage}) {
  return (
    <div className='w-full xl:h-full grid-cols-1 xl:grid-cols-2 flex xl:flex-row flex-col py-2 justify-center gap-3 '>
      {/* <UploadPage/> */}
      <PendingSubmission setOpenUploadPage={setOpenUploadPage}/>
      <RecentSubmission/>
    </div>
  )
}

export default StudentSubmission