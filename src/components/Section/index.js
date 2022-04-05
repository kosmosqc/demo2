import React from 'react'
//import { Button } from '../ButtonElements'
import Video from '../../medias/video3.mp4'
import { SectionContainer, SectionBg, VideoBg, SectionContent, SectionH1 } from './SectionElements'

const Section = () => {

    return (
        <SectionContainer id="home">
            <SectionBg>
                <VideoBg autoPlay loop mutes src={Video} type='video/mp4'></VideoBg>
            </SectionBg>
            <SectionContent>
                <SectionH1>Alain Gionet</SectionH1>
            </SectionContent>
        </SectionContainer>
    )
}

export default Section