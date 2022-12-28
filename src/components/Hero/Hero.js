import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there. Here's my portfolio.
      </SectionTitle>
      <SectionText>
        A full-stack developer with an interest in blockchains and distributed systems.
      </SectionText>
      <Button onClick={() => window.location = "https://linktree.com"}>Chat</Button>
    </LeftSection>
  </Section>
);

export default Hero;