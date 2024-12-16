import React from "react";


import {
  ProjectContainer,
  Project,
  ProjectsWrapper,
  ProjectText,
  ProjectName,
  ProjectTechnologies,
  ProjectImg,
  ProjectLink,
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
  const projects: Project[] = [
    {
      name: "Architect Website",
      technologies: "HTML / CSS / JS",
      image:
        "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/portfolio-website/projectsImages/project-hero-1.png",
      videoLink: "https://www.youtube.com/watch?v=3J-EFMzz94g",
    },
    {
      name: "Budget App",
      technologies: "ReactJS",
      image:
        "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/portfolio-website/projectsImages/project-hero-02.png",
      videoLink: "https://www.youtube.com/watch?v=fDffQYs2WB0",
    },
    {
      name: "Wine House",
      technologies: "HTML / CSS / JS",
      image:
        "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/portfolio-website/projectsImages/project-hero-1.png",
      videoLink: "https://www.youtube.com/watch?v=jtmuopTpzGE",
    },
    {
      name: "Task Manager",
      technologies: "ReactJS",
      image:
        "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/portfolio-website/projectsImages/project-hero-1.png",
      videoLink: "https://www.youtube.com/watch?v=fqup-BL3VjI",
    },

  ];

  return (
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
              href={project.videoLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Video
            </ProjectLink>
          </Project>
        ))}
      </ProjectsWrapper>
    </ProjectContainer>
  );
};

export default Projects;
