import styled from "styled-components";
//installed react-router-dom
import { Link as LinkRouter } from "react-router-dom";
//installed react-scroll
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "3px 3px 7px black" : "transparent"};
  background-color: ${({ scrollNav }) =>
    scrollNav ? "rgba(0, 0, 0, 0.6)" : "transparent"};
  height: 60px;
  margin-top: -60px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 900;
  transition: 0.5s all ease;
  @media screen and (max-width: 768px) {
    transition: 0.5s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  margin-left: 3vw;
  font-weight: bold;
  text-decoration: none;
  font-family: "Kumar One", cursive;

  @media screen and (max-width: 768px) {
    margin-top: 2vh;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -1vh;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 8vh;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #00a0e3;
  }
  &:hover {
    color: #0080f3;
    transform: scale(1.2);
  }
`;
