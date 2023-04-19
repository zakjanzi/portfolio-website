import React from 'react';
//hooks
import { useRef, useEffect, useState } from 'react';
//animations
import Aos from 'aos';
import "aos/dist/aos.css"
//components
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ResponseContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// Data/content.
import { projects } from '../../constants/constants';

const Projects = () => {
  const [responses, setResponses] = useState({});
  const [showResponse, setShowResponse] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState('');

  const handleSendRequest = async (id) => {
    // make API call (lambda function)
    const response = await fetch('https://kh0nb8jzt2.execute-api.eu-north-1.amazonaws.com/prod');
    const data = await response.json();
    setResponses(prevResponses => ({
      ...prevResponses,
      [id]: JSON.stringify(data)
    }));
    setShowResponse(true);
    setCurrentProjectId(id);
  };
  

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
              <TagList style={{ marginBottom: showResponse && currentProjectId === project.id ? '30px' : '10px' }}>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
              {showResponse && currentProjectId === project.id && (
                <ResponseContainer>
                  <p>{responses[project.id]}</p>
                </ResponseContainer>
              )}
            </div>
            <UtilityList>
              <ExternalLinks href={project.code} target="_blank">
                View Code
              </ExternalLinks>
              {project.id === 'scraper' ? (
                <ExternalLinks onClick={() => handleSendRequest(project.id)}>Send Request</ExternalLinks>
              ) : (
                <ExternalLinks href={project.live} target="_blank">
                  View Site
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
