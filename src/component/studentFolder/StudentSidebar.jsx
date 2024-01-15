import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineBarChart } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiCalendarMinus } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import DpuLogo from '../../assets/DpuLogo.png';


function StudentSidebar({section,setSection}) {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [hammer,setHammer] = useState(false);
  const [selected,setSelected] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }

  },[]);



  const design1 = (selected) => ({
    textAlign : "center",
    backgroundColor: selected ? "rgba(252, 252, 252, 0.192)" : 'transparent',
  })



  function handleClick(e) {
    e.preventDefault();
    const clickedElement = e.target;
    const buttonValue = clickedElement.value || clickedElement.closest('button').value;
    setSection(buttonValue);
    setSelected(buttonValue)
  }

  function handleHammerClick () {
    setHammer(!hammer);
    console.log("hammer clicked")
  }

  

  let condition = (windowWidth > 1023 || windowWidth < 640);

  return (
    <div
      style={{
        color: "black",
      }}
      className={`hideScrollbar xl:w-1/6 sm:w-fit sm:h-full gap-2 lg:gap-1 md:gap-2 sm:gap-1 flex ${
        hammer ? "flex-col" : ""
      } justify-between sm:flex-col  sm:pt-6 sm:pb-9 xl:text-1xl lg:text-lg md:text-md sm:text-sm items-center sm:overflow-x-hidden sm:justify-between bg-[#245DE1]`}
    >
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gloock&family=Rajdhani:wght@500&display=swap"
        />
      </Helmet>
      <div className="w-full flex sm:flex-col justify-between items-center pr-8">
        <div className="w-full flex sm:justify-start sm:pl-2 sm:items-center">
          <img className='sm:w-28 lg:w-48' src={DpuLogo} alt='DpuLogo' />
        </div>

        {windowWidth < 640 && (
          <div onClick={handleHammerClick} className="p-2 font-bold text-4xl text-white">
            {
              hammer ? <GrClose/> : <GiHamburgerMenu />
            }
          </div>
        )}
      </div>

      {(windowWidth >= 640 || hammer === true) && (
        <>
          <div className="h-full text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl flex flex-col xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 gap-2 mt-10 xl:mt-6 lg:mt-6 md:mt-5 sm:mt-4 w-full items-center ">
            
            
            
            
            
            
            <button
              style={design1(section === "Dashboard" ? true : false)} 
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Dashboard"
              onClick={(e) => handleClick(e)}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <AiOutlineBarChart />
              </div>
              {condition && "Dashboard"}
            </button>

            <button
              style={design1(section === "Submission" ? true : false)}
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Submission"
              onClick={handleClick}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <BiCalendarMinus />
              </div>
              {condition && "Submission"}
            </button>

            {/* <button
                  style={design1(section === "Discussion")}
                  className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
                  value="Discussion"
                  onClick={handleClick}
                >
                  <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                    <BsFillPeopleFill />
                  </div> 
                  {condition && ('Discussion')}
                </button> */}

            <button
              style={design1(section === "Assignments")}
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Assignments"
              onClick={handleClick}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <BsFillPeopleFill />
              </div>
              {condition && "Assignments"}
            </button>

            <button
              style={design1(section === "Courses")}
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Courses"
              onClick={handleClick}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <AiFillFolder />
              </div>
              {condition && "Courses"}
            </button>

            <button
              style={design1(section === "Faculty")}
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Faculty"
              onClick={handleClick}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <CgProfile />
              </div>
              {condition && "Faculty"}
            </button>
            <button
              style={design1(section === "Settings")}
              className="xl:py-3 xl:px-9 lg:p-4 md:p-3 sm:p-4 p-5  flex sm:justify-center lg:justify-start items-center gap-2 w-[100%] "
              value="Settings"
              onClick={handleClick}
            >
              <div className="text-4xl md:w-fit flex  sm:justify-start lg:w-fit">
                <AiFillSetting />
              </div>
              {condition && "Settings"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default StudentSidebar;