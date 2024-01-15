import React from 'react'

function Deadline({ selectedDate }) {
    return (
        <div className='h-[350px] w-full flex flex-col gap-4 '>
            <div className="selected-date w-full ">
                <h3 className='w-full text-center'><b>Deadlines Date : {selectedDate ? selectedDate.toDateString() : 'No date selected'}</b></h3>
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