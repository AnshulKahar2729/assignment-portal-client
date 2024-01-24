import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../store/userContext';

function PendingSubmission({enrolledCourses}) {

    // function getRandomDate() {
    //     // Generate a random year between 2022 and 2025
    //     const year = 2024;
      
    //     // Generate a random month between 1 and 12
    //     const month = 1;
      
    //     // Generate a random day between 1 and 31
    //     const day = Math.floor(Math.random() * 31) + 1;
      
    //     // Format the date
    //     const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en-US', {
    //       year: 'numeric',
    //       month: 'short',
    //       day: 'numeric',
    //     });
      
    //     // Add the ordinal suffix to the day (e.g., 1st, 2nd, 3rd, 4th, etc.)
    //     const dayWithSuffix = getDayWithSuffix(day);
      
    //     // Construct the final formatted date
    //     const finalFormattedDate = `${formattedDate}`;
      
    //     return finalFormattedDate;
    //   }
      
    //   function getDayWithSuffix(day) {
    //     // Add ordinal suffix to the day
    //     if (day >= 11 && day <= 13) {
    //       return `${day}th`;
    //     }
    //     switch (day % 10) {
    //       case 1:
    //         return `${day}st`;
    //       case 2:
    //         return `${day}nd`;
    //       case 3:
    //         return `${day}rd`;
    //       default:
    //         return `${day}th`;
    //     }
    //   }
    

  return (
    <div className='w-full   rounded-lg bg-white flex flex-col gap-3 overflow-hidden'>
        <p className='w-full text-center text-white border-b p-4 border-[#245DE1] bg-[#245DE1] font-bold'>Pending Submissions</p>
        <div className='hideScrollbar flex px-4 flex-col gap-3 w-full overflow-y-auto rounded-lg scrollbar-hidden h-[300px] sm:h-[450px] xl:h-[620px]'>
            {
              enrolledCourses.map((course, idx) => (
                <div>
                  {
                    course.assignments.map((assignment, idx) => (
                      <div className='border-b-2 p-4 border-blue-100'>
                        <p><span className='text-gray-600'>Subject:</span> <span className='font-bold'>{course.name}</span></p>
                        <p><span className='text-gray-600'>Title:</span> <span className='font-bold'>{assignment.title}</span></p>
                        <div className='flex justify-between items-center'>
                          <Link to={`/submission/uploadPage/${assignment._id}`}><button className='mt-2 text-sm bg-blue-600 hover:bg-blue-400 transition-all rounded-sm'>SUBMIT</button></Link>
                          <p>Last Date: <span className='text-red-600'>28th Jan</span></p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default PendingSubmission