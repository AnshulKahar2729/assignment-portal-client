import React from 'react'
import { Link } from 'react-router-dom';



const SideBar = ({role}) => {
  
  const Navigation = role === 'student' ?
  // Students Dashboard
  [
    {
      url: '/',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Dashboard',
    },
    {
      url: '/submissions',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Submissions',
    },
    {
      url: '/assignments',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Assignments',
    },
    {
      url: '/courses',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Courses',
    },
    {
      url: '/faculty',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Faculty',
    },
  ]
  :
  // Teachers Dashboard
  [
    {
      url: '/',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Dashboard',
    },
    {
      url: '/courses',
      icon: <i class="fa-solid fa-chart-line"></i>,
      title: 'Courses',
    },
  ];

  return (
    <div className='Sidebar'>

      {/* logo goes here  */}
      <div className="logo mb-8">LOGO</div>

      {/* main navigation  */}
      <div className='flex flex-col mb-8'>
        {Navigation.map((item) => (
          <Link to={item.url}>
            <div className='flex items-center border-b-2 py-3 mb-2 gap-2'>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* extra navigation  */}
      <div className=''>
        {/* <Link to='profile'>
          <div className='flex items-center border-b-2 py-3 mb-2 gap-2'>
            <i class="fa-solid fa-chart-line"></i>
            <p>Profile</p>
          </div>
        </Link> */}
        <Link to='settings'>
          <div className='flex items-center border-b-2 py-3 mb-2 gap-2'>
            <i class="fa-solid fa-chart-line"></i>
            <p>Settings</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar