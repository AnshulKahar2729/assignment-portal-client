import React from 'react'

function Deadline({ selectedDate }) {
    const today = new Date();
    return (
        <div className='h-[350px] w-full flex flex-col gap-4 text-[#245DE1] text-xl'>
            <div className="selected-date w-full ">
                <h3 className='w-full text-center border-b border-[#245de153] text-2xl'><b>Deadlines Date : <br/>{selectedDate ? selectedDate.toDateString() : today.toDateString()}</b></h3>
            </div>
            <div className='hideScrollbar flex flex-col overflow-y-auto '>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
                <div className='border-b grid gap-2 rounded-md p-3'>
                    <p>Assignment Name</p>
                    <p>Posted on : Date of Post</p>
                </div>
            </div>
        </div>
    )
}

export default Deadline