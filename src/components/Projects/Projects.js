import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// Constants separates the logic from the content.
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
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
            <TitleContent>Stack</TitleContent>
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

);

export default Projects;