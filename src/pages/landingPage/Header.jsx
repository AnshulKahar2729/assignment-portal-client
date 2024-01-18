import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/DpuLogo.png';


const Header = () => {
  return (
    <div className="w-full py-5 px-[12.5%] flex items-center">
        <img className='w-2/12' src={Logo} alt='Logo'/>
        <div className='flex flex-1 gap-4 justify-end'>
          <Link to="SignUpPage"><button className="">Sign Up</button></Link>
          <Link to="LoginPage"><button className="">Login</button></Link>
      </div>
    </div>
  )
}

export default Header