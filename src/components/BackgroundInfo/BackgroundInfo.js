import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './BackgroundInfoStyles';

const data = [
  { title: 'B.Sc in Business', text: 'Entrepreneurial mgt. at the Lebanese American University'},
  { title: 'FinTech background', text: 'Strong knowledge in P2P finance', },
  { title: 'Startup experience', text: 'Knowledgeable about the agile development process', },
  { title: 'Blockchain researcher', text: 'Studied the ramifications of blockchain in hyperinflationary economies.'}
];

const BackgroundInfo = () => (
  <Section>
    <SectionTitle>Some Background</SectionTitle>
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

export default BackgroundInfo;
