import React from 'react';
import Sections from './Sections';
import Benefits from './Benefits';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Header from './Header';

function IndexPage() {
  return (
    <div className='w-full bg-white'>
       <div>
        <Header/>
       </div>
        <Sections/>
        <div>
          <AboutUs/>
        </div>
        <div>
          <Benefits/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default IndexPage