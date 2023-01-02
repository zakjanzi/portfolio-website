import React from 'react';
import { DiEnvato, DiFirebase, DiJavascript, DiJenkins, DiNodejs, DiOpensource, DiReact, DiScrum, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"
//hooks
import { useRef, useEffect, useState } from 'react';


const Technologies = () =>  {

    useEffect(() => {
    Aos.init({ 
      duration: 2000
    });

  }, []);

  return (
  <Section id="tech" >
    <SectionDivider />
    <br />
    <SectionTitle data-aos="fade-up">My Stack</SectionTitle>
    <SectionText data-aos="fade-right"> What I know and what I plan on learning.</SectionText>
    <List data-aos="fade-right">
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Proficient in HTML, CSS and JavaScript. I learned to build and deploy static websites from scratch. Interested in exploring an SSR like Gulp or Gatsby in the near future. Also adept with React.js and several libraries (such as material UI).</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size="4rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with Node.js in building server-side apps as well as RESTful APIs. Competent in Postman for API testing (thanks to my QA background)</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiOpensource size="4rem"/>
        <ListContainer>
          <ListTitle>Blockchain Dev</ListTitle>
          <ListParagraph>In-depth knowledge of blockchain technology. Basic knowledge of Solidity and its frameworks (Hardhat / Truffle). Deployed a few contracts forked from the Open Zeppelin library and worked on non-custodial mobile wallets. Also experimented with web3 user auth using Moralis.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiEnvato size="4rem"/>
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>Experienced with tools like Figma, Photoshop and Illustrator. Can quickly create visually appealing designs and mockups for a project.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJenkins size="4rem"/>
        <ListContainer>
          <ListTitle>Manual & Automated QA Tester</ListTitle>
          <ListParagraph>2 years of experience in manual QA testing in an agile environment. Competent with Cypress.js testing framework for end-to-end tests. Used Jenkins CI for automating build and testing processes.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
};
export default Technologies;
