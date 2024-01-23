import React from "react";

function Updates({ allAssignments }) {
  return (
    <div className="w-full xl:w-[49%] h-[249px] flex flex-col bg-white rounded-lg  p-2 ">
      <p className=" w-full h-[50px] flex flex-col justify-center items-center py-3 text-[#245DE1] border-b border-[#245de153] text-2xl">
        <b className="h-full ">Updates</b>
      </p>
      <div className="flex flex-col overflow-y-auto">
      {allAssignments.map((item) => (
        <div className="hideScrollbar flex flex-col gap-5 text-lg sm:text-xl  bg-[#245DE1] rounded-lg p-3 lg:bg-white lg:text-[#245DE1] text-white">
          <div className="flex flex-col p-1 border-[#245DE1] rounded-lg ">
            <p className="text-sm text-red-600 animate-pulse">New Assignment</p>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Updates;