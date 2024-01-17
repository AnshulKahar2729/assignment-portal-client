import React from 'react'

function Assignments() {
  return (
    <div className=' w-full sm:h-full flex flex-col items-center gap-5 overflow-y-scroll p-2 '>

        <div className='bg-white w-full h-fit rounded-lg border border-[#245DE1]'>
            <div className='h-14 p-5  flex items-center bg-[#245DE1] text-white rounded-t-lg'>
                <p className='text-md'>SOMEONE posted a new material : MATERIAL_NAME</p>
            </div>
            <div className='p-5 gap-3 grid'>
                <p className='w-full text-sm font-semibold text-[#245DE1]'>Posted : DATE_OF_POST</p>
                <div className='w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4'>

                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>
                    
                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        
        <div className='bg-white w-full h-fit rounded-lg border border-[#245DE1]'>
            <div className='h-14 p-5  flex items-center bg-[#245DE1] text-white rounded-t-lg'>
                <p className='text-md'>SOMEONE posted a new material : MATERIAL_NAME</p>
            </div>
            <div className='p-5 gap-3 grid'>
                <p className='w-full text-sm font-semibold text-[#245DE1]'>Posted : DATE_OF_POST</p>
                <div className='w-full p-1 flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-8 gap-y-4'>

                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center text-sm flex flex-col justify-between font-semibold text-[#245DE1]'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>

                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>

                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>

                    <div className='h-20 lg:w-[45%] w-[95%] border rounded-md flex overflow-hidden'>
                        <div className='w-[35%] h-full border-r flex items-center justify-center bg-[#245DE1] text-white border-[#245DE1]'>Image</div>
                        <div className='w-[65%] h-full p-3 item-center'>
                            <p>NAME_OF_FILE.pdf</p>
                            <p>Type_OF_FILE</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Assignments