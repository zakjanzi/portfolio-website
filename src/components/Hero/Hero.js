import React from 'react';
//hooks
import { useRef, useEffect, useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"
//helmet
import { Helmet } from 'react-helmet';

const Hero = (props) => {
    useEffect(() => {
    Aos.init({ 
      duration: 2000
    });

  }, []);
  return (
    <>
    <Helmet>
        <meta name="google-site-verification" content="MbCRB97d_qK4BfXEHJWf6IOt2o_oTSK7exvtgI1aUfY" />
        <meta property="og:title" content="Zak Janzi - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zakjanzi.netlify.app" />
        <meta property="og:image" content="https://i.postimg.cc/fbWn28R6/SON8258-Copy-2.jpg" />
        <meta property="og:description" content="Junior full-stack JavaScript developer" />
        <meta property="og:site_name" content="Zak's Portfolio" />

    </Helmet>
     
  <Section row nopadding>
    <LeftSection data-aos="fade-in">
      <SectionTitle main center>
        Hi there,
      </SectionTitle>
      <SectionText>
        I'm Zak - A QA tester that codes. <br /> I also like blockchains and distributed systems.
      </SectionText>
      <Button onClick={() => window.open("https://linktr.ee/zakjanzi", "_blank")}>View CV</Button>

    </LeftSection>
  </Section>
  </>
);
}
export default Hero;