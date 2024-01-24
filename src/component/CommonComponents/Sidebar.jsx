import React, { useEffect, useState } from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiCalendarMinus } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiFillSetting } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import DpuLogo from '../../assets/DpuLogo.png';
import { PiStudentFill } from "react-icons/pi";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Sidebar({ role,clickedHamburger,setClickedHamburger}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(() => {
    const storedSelected = localStorage.getItem('selectedSidebar');
    return storedSelected || 'Dashboard';
  });
  function handleHamburgerClick () {
    setClickedHamburger(!clickedHamburger);
  }

  const handleClick = (title, url) => {
    setSelected(title);
    localStorage.setItem('selectedSidebar', title);
    navigate(url);
    setClickedHamburger(!clickedHamburger);
  };


    const Navigation = role === 'student' ?
            [
                {
                    url : '/',
                    icon : <AiOutlineBarChart className='text-4xl' />,
                    title : 'Dashboard',
                },
                {
                    url : '/courses',
                    icon : <AiFillFolder className='text-4xl'/>,
                    title : 'Courses',
                },
                {
                    url : '/submission',
                    icon : <BiCalendarMinus className='text-4xl'/>,
                    title : 'Submission',
                },
                // {
                //     url : '/assignments',
                //     icon : <BsFillPeopleFill className='text-4xl'/>,
                //     title : 'Assignments',
                // },
                {
                    url : '/facultyinfo',
                    icon : <CgProfile className='text-4xl'/>,
                    title : 'Faculty',
                },
                {
                    url : '/settings',
                    icon : <AiFillSetting className='text-4xl'/>,
                    title : 'Settings',
                },
            ]
            :
            [
                {
                    url : '/',
                    icon : <AiOutlineBarChart className='text-4xl'/>,
                    title : 'Dashboard',
                },
                {
                    url : '/courses',
                    icon : <AiFillFolder className='text-4xl'/>,
                    title : 'Courses',
                },
                {
                  url : '/studentinfo',
                  icon : <PiStudentFill className='text-4xl'/>,
                  title : 'Student Info',
                },
                // {
                //   url : '/assignments',
                //   icon : <BsFillPeopleFill className='text-4xl'/>,
                //   title : 'Assignments',
                // },
                {
                    url : '/settings',
                    icon : <AiFillSetting className='text-4xl'/>,
                    title : 'Settings',
                },
            ]

            useEffect(() => {
              const storedSelected = localStorage.getItem('selectedSidebar');
              const initialSelected = storedSelected || 'Dashboard';
              setSelected(initialSelected === 'Settings' ? 'Dashboard' : initialSelected);
            }, []);
            
              return (
                <div className="h-full sm:h-full flex flex-col overflow-hidden  items-center bg-white">
                  <div className="w-full flex justify-between items-center sm:justify-start p-2 ">
                    <div className='w-full pl-2 py-5 flex justify-start md:justify-start sm:justify-center'><Link to='/' onClick={() => handleClick('Dashboard', '/')} ><img className='w-20 lg:w-32 xl:w-36' src={DpuLogo} alt="logo" /></Link></div>
                    <div onClick={handleHamburgerClick} className="p-2 font-bold text-4xl text-[#245DE1] block sm:hidden">
                      {clickedHamburger ? <GrClose/> : <GiHamburgerMenu /> }
                    </div>
                  </div>
                  <div className=" w-full sm:grid sm:grid-cols-1 flex flex-col gap-2 justify-center sm:gap-6 h-full sm:h-fit">
                    {Navigation.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => handleClick(item.title, item.url)}
                        className={`${clickedHamburger ? 'sm:block' : 'hidden'} sm:block text-sm  md:text-sm lg:text-xl ${
                          selected === item.title
                            ? "selectedSidebarBtn"
                            : "SidebarBtn"
                        } SidebarBtn flex items-center w-full md:p-2 lg:p-3 xl:p-4 gap-3`}
                      >
                        <p className="sm:w-full sm:justify-center md:justify-start flex gap-2 items-center">
                          {item.icon}
                          <p className=" sm:hidden md:block">{item.title}</p>
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            
            export default Sidebar;