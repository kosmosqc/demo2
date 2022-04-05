import React, { useState } from 'react'

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import InfoSection from '../components/InfoSection';
import { homeObgOne,homeObgOneb } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Section />
      <InfoSection {...homeObgOne}/>
      <InfoSection {...homeObgOneb}/>
      {/* <InfoSection {...homeObgOnea}/> */}
      <Services/>
      
      <Footer/>
    </>
  )
}

export default Home