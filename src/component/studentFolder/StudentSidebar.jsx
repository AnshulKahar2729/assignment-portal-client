import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiOutlineBarChart } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiCalendarMinus } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";






function StudentSidebar({section,setSection}) {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [hammer,setHammer] = useState(false);

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
    backgroundColor: selected ? '#B38378' : '#ffffff92',
    // width: selected ? '' :'',
    textAlign : "center",
    borderRadius : '25px',
    // WebkitBorderTopLeftRadius : selected ?  '25px' : "25px",
    // WebkitBorderBottomLeftRadius : selected ?  '25px' : "25px",
    // WebkitBorderTopRightRadius : selected ?  '0px' : "25px",
    // WebkitBorderBottomRightRadius : selected ?  '0px' : "25px",
  })

  function handleClick(e) {
    e.preventDefault();
    const clickedElement = e.target;
    const buttonValue = clickedElement.value || clickedElement.closest('button').value;
    setSection(buttonValue);
  }

  function handleHammerClick () {
    setHammer(!hammer);
    console.log("hammer clicked")
  }

  let condition = (windowWidth > 940 || windowWidth < 640);


  return (
    <div
      style={{
        // WebkitBorderTopRightRadius: "50px",
        // WebkitBorderBottomRightRadius: "50px",
        color:"black",
        backgroundColor: "#0017e9",
        backgroundImage: "linear-gradient(225deg, #0017e9 21%, #4d0cdb 54%, #765ee1 100%, #ffffff 100%)",

      }}
      className={`xl:w-1/5 sm:w-[20%] sm:h-full gap-2 xl:gap-5 lg:gap-3 md:gap-2 sm:gap-1 bg-[#001aff]  flex ${hammer ?'flex-col' : ''} justify-between px-8 py-4 sm:flex-col  sm:pt-10 sm:pb-9 xl:text-1xl lg:text-lg md:text-md sm:text-sm items-center sm:overflow-x-hidden sm:justify-between `}
    >
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Gloock&family=Rajdhani:wght@500&display=swap"
            />
          </Helmet>
         <div className='w-full flex sm:flex-col justify-between items-center'>
         <div style={{ fontFamily: "Rajdhani,sans-serif" }} className="text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  flex sm:justify-center sm:items-center">
              <p className='p-4 xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 rounded-md shadow-xl bg-gray-400 items-center flex justify-center' style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}>
                Logo
              </p>
          </div>

        {
          windowWidth < 640 && (
            <div onClick={handleHammerClick} className='p-2 font-bold text-3xl'><GiHamburgerMenu/></div>
          )
        }
         </div>

        {
          (windowWidth >= 640 || hammer===true) && (
            <>
            <div
            style={{ fontFamily: "Rajdhani,sans-serif", fontWeight: "600" }}
            className="h-full text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl flex flex-col xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 gap-2 mt-10 xl:mt-6 lg:mt-6 md:mt-5 sm:mt-4 w-full items-center "
          >
                <button
                  style={design1(section === "Dashboard")}
                  className="xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Dashboard"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <AiOutlineBarChart />
                  </div> 
                  { condition && ('Dashboard')}
                </button>

                <button
                  style={design1(section === "Submission")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Submission"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <BiCalendarMinus />

                  </div> 
                  {condition && ('Submission')} 
                </button>

                {/* <button
                  style={design1(section === "Discussion")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Discussion"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <BsFillPeopleFill />
                  </div> 
                  {condition && ('Discussion')}
                </button> */}

                <button
                  style={design1(section === "Courses")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Courses"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <AiFillFolder />
                  </div> 
                  {condition && ('Courses')}
                </button>

                <button
                  style={design1(section === "Faculty")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-4 p-5 shadow-2xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Faculty"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <CgProfile />
                  </div> 
                  {condition && ('Faculty')}
                </button>
            </div>
            <div className='flex justify-center text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                <button
                style={design1(section === "Settings")}
                  className=" xl:p-3 lg:p-4 md:p-3 sm:p-3 p-2 shadow-2xl bg-[#ffffff92] rounded-3xl flex justify-center items-center gap-2 w-[100%] text-black"
                  value="Settings"
                  onClick={handleClick}
                >
                  <div className='text-4xl'>
                  <AiFillSetting />
                  </div> 
                  {condition && ('Settings')}
                </button>
            </div>
            </>
          )
        }
          
    </div>
  );
}

export default StudentSidebar;







