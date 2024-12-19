import React from "react";

import portfolioData from "../../data/portfolioData.json"


import {
  ProjectContainer,
  Project,
  ProjectsWrapper,
  ProjectText,
  ProjectName,
  ProjectTechnologies,
  ProjectImg,
  ProjectLink,
  StyleContainer,
} from "./project.style";
import { SectionHeading, SectionHeadingLine } from "../commun-styled/commun.styled";

// Define the type for a project
interface Project {
  name: string;
  technologies: string;
  image: string;
  videoLink: string;
}

const Projects: React.FC = () => {

  const {projects} = portfolioData;



  return (
    <>
    <ProjectContainer id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <SectionHeadingLine />
      <ProjectsWrapper className="center">
        {projects.map((project, index) => (
          <Project key={index}>
            <ProjectText>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            </ProjectText>
            <ProjectImg src={project.image} alt={`${project.name} preview`} />
            <ProjectLink
              to={project.to}
            >
              Go to Video →
            </ProjectLink>
          </Project>
        ))}
      </ProjectsWrapper>
    </ProjectContainer>
    <StyleContainer/>
    </>
  );
};

export default Projects;
