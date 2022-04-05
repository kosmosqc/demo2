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
              <SocialIconLink href="https://github.com/kosmosqc?tab=repositories">
                <FaGitSquare />
              </SocialIconLink>
              <SocialIconLink href="https://replit.com/@AlainGionet/Tic-tac-toe-1?v=1">
                <FaGamepad />
              </SocialIconLink>
              <SocialIconLink href="https://addons.mozilla.org/en-US/firefox/addon/rounded-price-for-amazon/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">
                <FaDollarSign />
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
