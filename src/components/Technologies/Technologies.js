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
    <List data-aos="fade-right">


    <ListItem>
        <ListContainer>
          <ListTitle>QA Testing</ListTitle>
          <ListParagraph>
            <a style={linkStyle} href="https://atsqa.org/certified-testers/profile/a1400f7c67c9434297f354412437c5d0" target="_blank">
              ISTQB Certified tester
            </a> with extensive experience working in agile environments. Experience using Cypress.js, Postman and familiar with Selenium. Knowledge of CI/CD tools like Jenkins.</ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>My JS framework of choice is React.js (and subsequently React Native). I strive for intuitive and clean UI design in all of my work. I also have experience building, integrating and testing RESTful APIs.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Knowledge using Next.js for building server-side rendered React applications with Node/Express. Knowledge of SQL and Non-SQL Databases. Interested in exploring a langauge like Rust or C#.</ListParagraph>
        </ListContainer>
      </ListItem>

      {/* <ListItem>
        <ListContainer>
          <ListTitle>Blockchain Dev</ListTitle>
          <ListParagraph>Familiar with Solidity and Hardhat. Deployed a few contracts forked from the Open Zeppelin library on the Ethereum network and worked on non-custodial mobile wallets and payment gateways. Interested in P2P finance.</ListParagraph>
        </ListContainer>
      </ListItem> */}

      {/* <ListItem>
        <DiEnvato size="4rem"/>
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>Experienced with tools like Figma, Photoshop and Illustrator. Can quickly create visually appealing designs and mockups for a project. Can also turn Figma wireframes to code with pixel-perfect designs.</ListParagraph>
        </ListContainer>
      </ListItem> */}

      
    </List>
  </Section>
);
};
export default Technologies;
