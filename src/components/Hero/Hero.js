import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there.
      </SectionTitle>
      <SectionText>
        I'm Zak. A full-stack developer with a background in QA testing. I like blockchains and distributed systems.
      </SectionText>
      <Button onClick={() => window.location = "https://linktr.ee/zakjanzi"}>Chat</Button>
    </LeftSection>
  </Section>
);

export default Hero;