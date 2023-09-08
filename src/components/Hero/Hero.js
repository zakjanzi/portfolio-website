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
    const script = document.createElement('script');
    script.src = 'https://contra.com/static/embed/sdk.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
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
        <meta property="og:description" content="Full-Stack QA Engineer" />
        <meta property="og:site_name" content="Zak's Portfolio" />

    </Helmet>
     
  <Section row nopadding>
    <LeftSection data-aos="fade-in">
      <SectionTitle main center>
        Hi there,
      </SectionTitle>
      <SectionText>
        I'm Zak - a Full-Stack QA Engineer. <br /> I also like cryptography and distributed systems.
      </SectionText>
      {/* <Button onClick={() => window.open("https://linktr.ee/zakjanzi", "_blank")}>View CV</Button> */}
      <div className="contra-hire-me-button" data-analyticsUserId="5dba78c3-c264-42eb-a9c1-652bb54958d0" data-theme="dark" data-username="zakjanzi_z23fzkfn" style={{ fontSize: '16px'}}></div>


    </LeftSection>
  </Section>
  </>
);
}
export default Hero;