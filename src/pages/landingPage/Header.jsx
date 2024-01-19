import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/DpuLogo.png';


const Header = () => {
  return (
    <div className="w-full py-5 px-1 sm:px-[1%] md:px-[3%] lg:px-[6%] xl:px-[12.5%] flex items-center">
        <img className='w-20 sm:w-24 md:w-28 lg:w-36' src={Logo} alt='Logo'/>
        <div className='flex flex-1 gap-4 justify-end'>
          <Link to="signup"><button className="rounded-md text-sm sm:text-lg md:text-xl">Sign Up</button></Link>
          <Link to="login"><button className="rounded-md text-sm sm:text-lg md:text-xl">Login</button></Link>
      </div>
    </div>
  )
}

export default Header