import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/NavBar";
import NavBarComponent from "../../components/NavBarOverlay";
import Sidebar from "../../components/SideBar";

const Home = () => {
  //toggels navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <NavBarComponent /> */}
      <HeroSection />
    </>
  );
};

export default Home;
