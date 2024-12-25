import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";

import {
  FaLinkedin,
  FaGitSquare,
  FaGamepad,
  FaDollarSign,
} from "react-icons/fa";

import { GrMail } from "react-icons/gr";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialMediaIconWrap,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaIconWrap>
            <SocialIcons>
              <SocialIconLink href="https://www.linkedin.com/in/alain-gionet-8899a1220/">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="mailto:kosmosqc@gmail.com>">
                <GrMail />
              
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaIconWrap>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kosmos
            </SocialLogo>
            <WebsiteRights>
              {" "}
              Alain Gionet © {new Date().getFullYear()} Codé avec React.js et
              déployé avec github
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
