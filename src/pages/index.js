import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Section from "../components/Main";
import InfoSection from "../components/InfoSection";
import { homeObg1, homeObg2 } from "../components/InfoSection/Data";
import Projets from "../components/Projets";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Section />
      <InfoSection {...homeObg1} />
      <InfoSection {...homeObg2} />
      {/* <InfoSection {...homeObg1a}/> */}
      <Projets />

      <Footer />
    </>
  );
};

export default Home;
