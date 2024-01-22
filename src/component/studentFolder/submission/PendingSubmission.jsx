import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../store/userContext';

function PendingSubmission({assignments}) {

    function getRandomDate() {
        // Generate a random year between 2022 and 2025
        const year = 2024;
      
        // Generate a random month between 1 and 12
        const month = 1;
      
        // Generate a random day between 1 and 31
        const day = Math.floor(Math.random() * 31) + 1;
      
        // Format the date
        const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      
        // Add the ordinal suffix to the day (e.g., 1st, 2nd, 3rd, 4th, etc.)
        const dayWithSuffix = getDayWithSuffix(day);
      
        // Construct the final formatted date
        const finalFormattedDate = `${formattedDate}`;
      
        return finalFormattedDate;
      }
      
      function getDayWithSuffix(day) {
        // Add ordinal suffix to the day
        if (day >= 11 && day <= 13) {
          return `${day}th`;
        }
        switch (day % 10) {
          case 1:
            return `${day}st`;
          case 2:
            return `${day}nd`;
          case 3:
            return `${day}rd`;
          default:
            return `${day}th`;
        }
      }
    

  return (
    <div className='w-full   rounded-lg bg-white flex flex-col gap-3 text-[#245DE1] overflow-hidden'>
        <p className='w-full text-center text-white border-b p-4 border-[#245DE1] bg-[#245DE1] font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]'>

            {/* <Link to='/submission/uploadPage'>
                <div className='w-[95%] flex sm:flex-row flex-wrap justify-between p-2 bg-white border-b border-[#245DE1] cursor-pointer hover:bg-[#245DE1] hover:text-white duration-200 hover:rounded-lg'>
                    <div className='flex flex-col gap-1'>
                        <p>Submitted : FileName</p>
                        <p>Course : Course Name</p>
                    </div>
                    <p>Date : Date of Submission</p>
                </div>
            </Link>

            <Link to='/submission/uploadPage'>
                <div className='w-[95%] flex sm:flex-row flex-wrap justify-between p-2 bg-white border-b border-[#245DE1] cursor-pointer hover:bg-[#245DE1] hover:text-white duration-200 hover:rounded-lg'>
                    <div className='flex flex-col gap-1'>
                        <p>Submitted : FileName</p>
                        <p>Course : Course Name</p>
                    </div>
                    <p>Date : Date of Submission</p>
                </div>
            </Link> */}

            {assignments.map((item) => (
            <Link to={`/submission/uploadPage/${item._id}`}>
                <div className='border-b border-gray-300 pb-4'>
                <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-[#245DE1] ">
                <div className="flex flex-col gap-1">
                    <p>Assignment : {item.title}</p>
                    <p>Course : {item.title}</p>
                </div>
                <div>
                    {/* <a className="bg-[#245DE1] text-white px-2 py-1 text-sm rounded-md" target="blank" href={item.file}>Download</a> */}
                    <p className='text-red-600'>Last Date : {getRandomDate()}</p>
                </div>
                </div>
                
                <a className="bg-[#245DE1] text-white px-2 py-1 text-sm rounded-md" target="blank" href={item.file}>Submit Now</a>
                </div>
            </Link>
            ))}


        </div>

        

    </div>
  )
}

export default PendingSubmission