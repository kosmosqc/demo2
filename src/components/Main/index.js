import React from "react";
import Video from "../../medias/video.mp4";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
} from "./MainElements";

const Main = () => {
  return (
    <MainContainer id="home">
      <MainBg>
        <VideoBg autoPlay loop mutes src={Video} type="video/mp4"></VideoBg>
      </MainBg>
      <MainContent>
        <MainH1>Alain Gionet</MainH1>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
