import React from 'react';
import { DiFirebase, DiReact, DiScrum, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" >
    <SectionDivider />
    <br />
    <SectionTitle>My Stack</SectionTitle>
    <SectionText>
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Proficient in HTML, CSS and JavaScript. I learned to build and deploy static websites from scratch. Interested in exploring an SSR like Gulp or Gatsby in the near future. Also adept with React.js and several libraries (such as material UI).</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with Node.js in building server-side apps as well as RESTful APIs. Competent in Postman for API testing (thanks to my QA background)</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>Experienced with tools like Figma, Photoshop and Illustrator.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiScrum size="3rem"/>
        <ListContainer>
          <ListTitle>Manual & Automated QA Tester</ListTitle>
          <ListParagraph>2 years of experience in manual QA testing in an agile environment. Competent with Cypress.js testing framework for end-to-end tests.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
