import React from 'react';
//hooks
import { useRef, useEffect, useState } from 'react';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './BackgroundInfoStyles';

const data = [
  { title: 'B.Sc in Business', text: 'A tech-oriented business grad from the Lebanese American University.' },
  { title: 'Startup experience', text: 'Multiple years of experience working in fast-paced agile environments. Strong background in FinTech. (P2P finance)', },
  { title: 'Other', text: ' Trilingual', }
];

const BackgroundInfo = () => {
    useEffect(() => {
    Aos.init({ 
      duration: 2000
    });

  }, []);
  return (
  <Section data-aos="fade-up" id='background'>
    <SectionTitle>Background Info</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);
};
export default BackgroundInfo;
