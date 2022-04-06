import React from "react";

import Icon1 from "../../medias/svg-4.svg";
import Icon2 from "../../medias/svg-5.svg";
import Icon3 from "../../medias/svg-6.svg";
import {
  ProjetsWrapper,
  ProjetsContainer,
  ProjetsH1,
  ProjetsH2,
  ProjetsIcon,
  ProjetsCard,
  ProjetsP,
  ProjetsLink,
} from "./ProjetsElements";

const Projets = () => {
  return (
    <ProjetsContainer id="projet">
      <ProjetsH1>
        <ProjetsWrapper>
          <ProjetsLink href="https://addons.mozilla.org/en-US/firefox/addon/rounded-price-for-amazon/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">
            <ProjetsCard>
              <ProjetsIcon src={Icon1} />
              <ProjetsH2>Amazon price rounder</ProjetsH2>
              <ProjetsP>
                Une extension qui permet d'arrondir les prix sur le site
                d'Amazon
              </ProjetsP>
            </ProjetsCard>
          </ProjetsLink>
          <ProjetsCard>
            <ProjetsIcon src={Icon2} />
            <ProjetsH2>Demo</ProjetsH2>
            <ProjetsP>
              <br />
              <br />
              (en construction)
            </ProjetsP>
          </ProjetsCard>
          <ProjetsCard>
            <ProjetsIcon src={Icon3} />
            <ProjetsH2>Demo</ProjetsH2>
            <ProjetsP>
              <br />
              <br />
              (en construction)
            </ProjetsP>
          </ProjetsCard>
        </ProjetsWrapper>
      </ProjetsH1>
    </ProjetsContainer>
  );
};

export default Projets;
