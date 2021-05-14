import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="home_page">
              Home
            </SidebarLink>
            <SidebarLink onClick={toggle} to="work_page">
              My Work
            </SidebarLink>
            <SidebarLink onClick={toggle} to="aboutMe_page">
              About Me
            </SidebarLink>
            <SidebarLink onClick={toggle} to="contactMe_page">
              Contact Me
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
