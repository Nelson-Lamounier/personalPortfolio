import React, { useEffect } from "react";
import portfolioData from "../../data/portfolioData.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  SectionHeadingLine,
  SectionHeading,
} from "../commun-styled/commun.styled";

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

// Define the type for a project
interface Project {
  title: string;
  name: string;
  technologies: string;
  image: string;
  Link: string;
}

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger child animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  const { projects, sectionHeading } = portfolioData;

  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Observe the section when it's 20% in view

  // Trigger animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <ProjectContainer id="portfolio">
        <SectionHeading data-text={sectionHeading}>
          {sectionHeading}
        </SectionHeading>
        <SectionHeadingLine />
        {/* Attach ref to observe the ProjectsWrapper */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <ProjectsWrapper className="center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Project>
                  <ProjectText>
                    <ProjectName>{project.name}</ProjectName>
                    <ProjectTechnologies>
                      {project.technologies}
                    </ProjectTechnologies>
                  </ProjectText>
                  <ProjectImg
                    src={project.image}
                    alt={`${project.name} preview`}
                  />
                  <ProjectLink to={project.to}>Go to Video →</ProjectLink>
                </Project>
              </motion.div>
            ))}
          </ProjectsWrapper>
        </motion.div>
      </ProjectContainer>
      <StyleContainer />
    </>
  );
};

export default Projects;
