import React from 'react';

function PendingSubmission({setOpenUploadPage}) {

    function handleClick() {
        setOpenUploadPage(true);
    }


  return (
    <div className='w-full   rounded-lg bg-white flex flex-col gap-3 text-[#245DE1] overflow-hidden'>
        <p className='w-full text-center text-white border-b p-4 border-[#245DE1] bg-[#245DE1] font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]'>

            <div onClick={handleClick} className='w-[95%] flex sm:flex-row flex-wrap justify-between p-2 bg-white border-b border-[#245DE1] cursor-pointer hover:bg-[#245DE1] hover:text-white duration-200 hover:rounded-lg'>
                <div className='flex flex-col gap-1'>
                    <p>Submitted : FileName</p>
                    <p>Course : Course Name</p>
                </div>
                <p>Date : Date of Submission</p>
            </div>

            <div onClick={handleClick} className='w-[95%] flex sm:flex-row flex-wrap justify-between p-2 bg-white border-b border-[#245DE1] cursor-pointer hover:bg-[#245DE1] hover:text-white duration-200 hover:rounded-lg'>
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