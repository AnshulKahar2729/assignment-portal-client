import React from 'react';

function PendingSubmission({setOpenUploadPage}) {

    function handleClick() {
        setOpenUploadPage(true);
    }


  return (
    <div className='w-full  px-4 rounded-lg bg-white flex flex-col gap-3 text-[#245DE1]'>
        <p className='w-full text-center text-[#245DE1] border-b p-4 border-[#245DE1] font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]'>

            <div onClick={handleClick} className='w-[95%] rounded-xl flex sm:flex-row flex-wrap justify-between p-2 bg-white border shadow-md cursor-pointer hover:bg-[#245DE1] hover:text-white duration-150'>
                <div className='flex flex-col gap-1'>
                    <p>Submitted : FileName</p>
                    <p>Course : Course Name</p>
                </div>
                <p>Date : Date of Submission</p>
            </div>

            <div onClick={handleClick} className='w-[95%] rounded-xl flex sm:flex-row flex-wrap justify-between p-2 bg-white border shadow-md cursor-pointer hover:bg-[#245DE1] hover:text-white duration-150'>
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