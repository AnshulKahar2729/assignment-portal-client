import React, { useState } from 'react';
import Sections from './Sections';
import Benefits from './Benefits';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Header from './Header';

function IndexPage() {


  return (
    <div className='w-full bg-white '>
        <Header/>
        <Sections/>
        <AboutUs/>
        <Benefits/>
        <Footer/>

    </div>
  );
}

export default IndexPage