import React, { useEffect, useState } from 'react'

function RecentSubmission() {
  const [assignments,setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/submittedassignment"
        );
        const data = await response.json();
        setAssignments(data);
        console.log(data);
      } catch (error) {
        console.error("Error getting Assignments : ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Data -> ',assignments)
  },[assignments])


  return (
    <div className='w-full md:w-[48%] h-[48%] md:h-full p-4 rounded-lg bg-[#b5bfc1d4] flex flex-col gap-3'>
        <p className='w-full text-center font-bold'>Recent Submissions</p>
        <div className='flex flex-col gap-3 w-full h-full overflow-y-auto rounded-lg scrollbar-hidden'>

            {
              assignments.map((item) => (
                <div className='w-[95%] rounded-xl flex sm:flex-row flex-wrap justify-between p-2 bg-[#9c9c9c8e]'>
                    <div className='flex flex-col gap-1'>
                        <p>Submitted : {item.title}</p>
                        <p>Course : Course Name</p>
                    </div>
                    <p>Date : Date of Submission</p>
                </div>
              ))
            }

        </div>
    </div>
  )
}

export default RecentSubmission