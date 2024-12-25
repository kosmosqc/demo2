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
  ProjetsTopline,
} from "./ProjetsElements";

const Projets = () => {
  return (
    <ProjetsContainer id="projet">
      <ProjetsH1>
        <ProjetsTopline>Projets</ProjetsTopline>
        <ProjetsWrapper>
          <ProjetsLink href="https://kosmicdiscovery.vercel.app/">
            <ProjetsCard>
              <ProjetsIcon src={Icon1} />
              <ProjetsH2>Blog de science</ProjetsH2>
              <ProjetsP>
              Un blog qui parle de science et de diverse théorie
              </ProjetsP>
            </ProjetsCard>
          </ProjetsLink>
          <ProjetsCard>
            <ProjetsIcon src={Icon2} />
            <ProjetsH2>Demo</ProjetsH2>
            <ProjetsP>
              <br />
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
