import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
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
            <SidebarLink onClick={toggle} to="dis">
              Parcour
            </SidebarLink>
            <SidebarLink onClick={toggle} to="about2">
              Skill
            </SidebarLink>
          </SidebarMenu>
          {/* {<SideBtnWrap>
                        <SidebarRoute to='/sign'>Sign in</SidebarRoute>
                    </SideBtnWrap>} */}
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
