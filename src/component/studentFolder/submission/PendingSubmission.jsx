import React from 'react'

function PendingSubmission() {
  return (
    <div className='w-full md:w-[48%] h-[48%] md:h-full p-4 rounded-lg bg-[#b5bfc1d4] flex flex-col gap-3'>
        <p className='w-full text-center font-bold'>Pending Submissions</p>
        <div className='flex flex-col gap-3 w-full h-full overflow-y-auto rounded-lg scrollbar-hidden'>

            <div className='w-[95%] rounded-xl flex sm:flex-row flex-wrap justify-between p-2 bg-[#9c9c9c8e]'>
                <div className='flex flex-col gap-1'>
                    <p>Submitted : FileName</p>
                    <p>Course : Course Name</p>
                </div>
                <p>Date : Date of Submission</p>
            </div>

        </div>
    </div>
  )
}

export default PendingSubmission