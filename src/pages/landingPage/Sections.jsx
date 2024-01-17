import React from 'react';
import rocket from '../../assets/rocket.png';

function Sections() {
  return (
    <div
      className="w-full font-serif h-full flex flex-col items-center text-center"
      style={{padding: " 1% 12.5%", gap: "120px" }}
    >
      <div className="flex flex-col " style={{ width: "60%" }}>
        <p className="font-normal text-[42px] justify-center text-blue-900">
          Empower education with effortless assignment collaboration.
        </p>
        <h3 className="text-1xl justify-center p-4">
          Simplify learning,elevate collaboration your all-in-one assignment
          management solution for students and teachers
        </h3>
        <div className="flex flex-row items-center justify-center">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white text-2xl font-serif py-3 px-10 rounded">
            Demo
          </button>
        </div>
      </div>


      <div className="w-full flex flex-col items-center">
        <div className="w-[50%] flex justify-center">
          <img src={rocket} className='rounded-full border-2  hover:translate-y-[-50px] transition-all hover:transition-all' alt=""/>
        </div>
        <p className="flex justify-center text-4xl mt-3 text-blue-900">
          Process based Paperless Day to Day Academics
        </p>
        <p className="text-xl p-7">
          Manage your daily activities completely digitally{" "}
        </p>
      </div>

    </div>
  );
}

export default Sections