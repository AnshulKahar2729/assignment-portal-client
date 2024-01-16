import React, { useState } from 'react';
import { AiOutlineBarChart } from "react-icons/ai";
import { BiCalendarMinus } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';
import DpuLogo from '../../assets/DpuLogo.png';

function Sidebar({role}) {
    const [selected,setSelected] = useState('Dashboard');

    function handleClick(e) {
        setSelected(e.target.value)
    }

    const Navigation = role === 'student' ?
            [
                {
                    url : '/',
                    icon : <AiOutlineBarChart className='text-4xl' />,
                    title : 'Dashboard',
                },
                {
                    url : '/submission',
                    icon : <BiCalendarMinus className='text-4xl'/>,
                    title : 'Submission',
                },
                {
                    url : '/assignments',
                    icon : <BsFillPeopleFill className='text-4xl'/>,
                    title : 'Assignments',
                },
                {
                    url : '/courses',
                    icon : <AiFillFolder className='text-4xl'/>,
                    title : 'Courses',
                },
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
                    url : '/settings',
                    icon : <AiFillSetting className='text-4xl'/>,
                    title : 'Settings',
                },
            ]


  return (
    <div className='h-screen flex flex-col overflow-hidden bg-white '>
        <div className='w-full'>
            <img src={DpuLogo} alt='logo'/>
        </div>
        <div className='mt-6 w-full grid grid-cols-1 gap-6 '>
          {Navigation.map((item) => (
              <Link to={item.url} >
                <button onClick={handleClick} value={item.title} className={`${selected === item.title ? 'selectedSidebarBtn' : 'SidebarBtn'} SidebarBtn flex items-center w-full p-4 gap-3`}>
                  <p>{item.icon}</p>{item.title}
                </button>
              </Link>
          ))}
        </div>
    </div>
  )
}

export default Sidebar