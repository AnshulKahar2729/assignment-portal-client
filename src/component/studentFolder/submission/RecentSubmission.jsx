import React, { useEffect, useState } from "react";

function RecentSubmission() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-portal-server.onrender.com/api/submittedassignment?role=student");
        const data = await response.json();
        setAssignments(data);
        console.log('Submitted Assignment  :::::> ',data);
      } catch (error) {
        console.error("Error getting Assignments : ", error);
      }
    };
    fetchData();
  }, []);
  console.log('Submitted Assignment  :::::> ',assignments);

  useEffect(() => {
    // console.log('Assignment ------>',assignments);
  }, [assignments]);

  return (
    <div className="w-full rounded-lg bg-white flex flex-col gap-3 overflow-hidden border shadow-lg ">
      <div className="w-full rounded-lg ">
        <p className="w-full text-center font-bold  text-white p-[15px] bg-[#245DE1] border-b">Recent Submissions</p>
        <div className="hideScrollbar flex flex-col px-4 gap-3 w-full  rounded-lg overflow-y-scroll h-[300px] sm:h-[450px] xl:h-[590px] ">
          {assignments.map((item) => (

            <div className="w-[95%] flex sm:flex-row flex-wrap justify-between p-2  text-[#245DE1] border-b border-[#245DE1]">
              <div className="flex flex-col gap-1">
                <p>Submitted : {item.title}</p>
                <p>Course : {item.title}</p>
              </div>
              <div>
                <a className="bg-[#245DE1] text-white px-2 py-1 text-sm rounded-md" target="blank" href={item.file}>Download</a>
                <p>Date : Date of Submission</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentSubmission;


