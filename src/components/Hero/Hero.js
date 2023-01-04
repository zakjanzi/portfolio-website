import React from 'react';
//hooks
import { useRef, useEffect, useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"

const Hero = (props) => {
    useEffect(() => {
    Aos.init({ 
      duration: 2000
    });

  }, []);
  return (
  <Section row nopadding>
    <LeftSection data-aos="fade-in">
      <SectionTitle main center>
        Hi there.
      </SectionTitle>
      <SectionText>
        I'm Zak - A full-stack developer with a background in QA testing. <br /> I also like blockchains and distributed systems.
      </SectionText>
      <Button onClick={() => window.location = "https://linktr.ee/zakjanzi"}>View CV</Button>
    </LeftSection>
  </Section>
);
}
export default Hero;