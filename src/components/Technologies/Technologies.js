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
          <ListParagraph>Extensive knowledge in HTML, CSS, and JavaScript. I designed, developed, and deployed high-quality static websites from scratch. I also have a solid understanding of React.js and React Native, and I have effectively utilized MaterialUI to enhance the user interface and experience of my projects.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Knowledge of using Next.js for building server-side rendered React applications, and its capabilities such as automatic code splitting, optimized performance, and seamless integration with Node.js and Express.</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Blockchain Dev</ListTitle>
          <ListParagraph>Familiar with Solidity and Hardhat. Deployed a few contracts forked from the Open Zeppelin library on the Ethereum network and worked on non-custodial mobile wallets. Very much looking forward to learning Rust or Haskell.</ListParagraph>
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
            </a> with experience in manual and automated testing in an agile environment. Competent in writing and running end-to-end tests with Cypress.js. Automated the building, testing and deployment processes of my projects with Netlify.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
};
export default Technologies;
