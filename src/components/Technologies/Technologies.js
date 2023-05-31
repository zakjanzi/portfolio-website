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
          <ListTitle>Quality Assurance</ListTitle>
          <ListParagraph>
            <a style={linkStyle} href="https://atsqa.org/certified-testers/profile/a1400f7c67c9434297f354412437c5d0" target="_blank">
              ISTQB Certified tester
            </a> with experience in Manual and Automated testing. Knowledge of tools and frameworks such as Cypress, Selenium, TestNG, Jenkins and REST Assured. Experience testing APIs and Databases.</ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience building and maintaining React and React Native components with emphasis on reusability. Proficiency in creating visually appealing UI with a focus on intuitive User experience.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Next.js is my go to framework for building server-side rendered React applications (as well as full-stack applications with serverless APIs). As for DBs, I am expereinced with SQL and No-SQL databases. Interested in exploring a functional langauge like Haskell.</ListParagraph>
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
