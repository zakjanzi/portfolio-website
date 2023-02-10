import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TextLink } from './TechnologiesStyles';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"
//hooks
import { useRef, useEffect, useState } from 'react';

const Technologies = () =>  {

  const linkStyle = {
    color: '#7DBBC3',
    textDecoration: 'underlined',
  };

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
    <List data-aos="fade-right">
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>3+ years JavaScript experience. I designed, developed, and deployed high-quality static websites from scratch. Experienced in React.js/Native and MaterialUI.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Knowledge of using Next.js for building server-side rendered React applications with Node.js and Express. Experience in building and testing RESTful APIs using Postman and familiar with GraphQL. Knowledge of MySQL and MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Blockchain Dev</ListTitle>
          <ListParagraph>Familiar with Solidity and Hardhat. Deployed a few contracts forked from the Open Zeppelin library on the Ethereum network and worked on non-custodial mobile wallets and payment gateways. Interested in P2P finance.</ListParagraph>
        </ListContainer>
      </ListItem>

      {/* <ListItem>
        <DiEnvato size="4rem"/>
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>Experienced with tools like Figma, Photoshop and Illustrator. Can quickly create visually appealing designs and mockups for a project. Can also turn Figma wireframes to code with pixel-perfect designs.</ListParagraph>
        </ListContainer>
      </ListItem> */}

      <ListItem>
        <ListContainer>
          <ListTitle>QA Testing</ListTitle>
          <ListParagraph>
            <a style={linkStyle} href="https://atsqa.org/certified-testers/profile/a1400f7c67c9434297f354412437c5d0" target="_blank">
              Certified ISTQB tester
            </a> with experience in manual and automated testing in an agile environment. Competent in writing and running end-to-end tests with Cypress.js. Automated the building, testing and deployment processes of my projects with Netlify & Jenkins.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
};
export default Technologies;
