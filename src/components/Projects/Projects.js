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
  <Section nopadding id="projects" data-aos="fade-up">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title="true">{project.title}</HeaderThree>
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
            <ExternalLinks href={project.code} target="_blank">View Code</ExternalLinks>
            <ExternalLinks href={project.live} target="_blank">View Site</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>

)};
