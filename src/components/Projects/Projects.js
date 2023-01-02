import React from 'react';
//hooks
import { useRef, useEffect, useState } from 'react';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"
//components
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// Data/content.
import { projects } from '../../constants/constants';





export default function Projects() {
  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();
  // console.log('myElementIsVisible', myElementIsVisible )
  // useEffect (() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMyElementIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // }, [])

  useEffect(() => {
    Aos.init({ 
      duration: 2000
    });

  }, []);

  return (
  <Section nopadding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle data-aos="fade-up">Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>

)};
