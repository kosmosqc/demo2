import React from "react";

import Icon1 from "../../medias/svg-4.svg";
import Icon2 from "../../medias/svg-5.svg";
import Icon3 from "../../medias/svg-6.svg";
import {
  ServicesWrapper,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="projet">
      <ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Demo</ServicesH2>
            <ServicesP>(en construction)</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Demo</ServicesH2>
            <ServicesP>(en construction)</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Demo</ServicesH2>
            <ServicesP>(en construction)</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesH1>
    </ServicesContainer>
  );
};

export default Services;
