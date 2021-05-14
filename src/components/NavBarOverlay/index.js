import React from "react";
import theme from "../stylesheet";
import { ThemeProvider } from "styled-components";
import {
  NavBar,
  NavName,
  JosipKustan,
  Nav,
  Home,
  NavMedia,
  BxbxlInstagram,
  Vector,
  VectorTwo,
  VectorThree,
  BxbxlLinkedinSquare,
  AntDesignfacebookOutlined,
} from "./NavBarOverlayElements";

const NavBarComponent = ({
  aboutMe = "About Me",
  contactMe = "Contact Me",
  home = "Home",
  josipKustan = "Josip Kuštan",
  myWork = "My Work",
  vector = "https://static.overlay-tech.com/assets/bd7ed1d5-7134-4e9f-92b0-c421ee4c05f4.svg",
  vectorFour = "https://static.overlay-tech.com/assets/979b054e-4e0e-4e5f-847a-329e44645bf9.svg",
  vectorThree = "https://static.overlay-tech.com/assets/6605c04b-8e2e-41e3-8f7e-c8c2d0595f93.svg",
  vectorTwo = "https://static.overlay-tech.com/assets/02412659-7062-460a-a6c6-7e9daff221ac.svg",
}) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <NavName>
          <JosipKustan>{josipKustan}</JosipKustan>
        </NavName>
        <Nav>
          <Home>{home}</Home>
          <Home>{myWork}</Home>
          <Home>{aboutMe}</Home>
          <Home>{contactMe}</Home>
        </Nav>
        <NavMedia>
          <BxbxlInstagram>
            <Vector />
            <VectorTwo alt="" src={vector} />
            <VectorThree alt="" src={vectorTwo} />
          </BxbxlInstagram>
          <BxbxlLinkedinSquare>
            <img alt="" src={vectorThree} />
          </BxbxlLinkedinSquare>
          <AntDesignfacebookOutlined>
            <img alt="" src={vectorFour} />
          </AntDesignfacebookOutlined>
        </NavMedia>
      </NavBar>
    </ThemeProvider>
  );
};

export default NavBarComponent;
