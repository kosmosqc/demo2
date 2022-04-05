import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              About
            </SidebarLink>
            <SidebarLink onClick={toggle} to="parcour">
              Parcour
            </SidebarLink>
            <SidebarLink onClick={toggle} to="about2">
              Projet
            </SidebarLink>
          </SidebarMenu>
          {
            <SideBtnWrap>
              <SidebarRoute to="/Skill">Skill</SidebarRoute>
            </SideBtnWrap>
          }
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
