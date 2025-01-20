import React, { useState, CSSProperties } from "react";
import resumeData from "../../data/resumeData.json";

import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTasks,
  FaLanguage,
} from "react-icons/fa";

import ScrollSection from "../motion/scroll.component";

import {
  SectionHeadingLine,
  SectionHeading,
} from "../commun-styled/commun.styled";

import {
  ResumeContainer,
  ResumeContent,
  ResumeCard,
  ResumeBullets,
  ResumeBulletDetails,
  BulletContainer,
  Bullet,
  BulletLabel,
  ResumeScreenContainer,
  ResumeHeadingContainer,
  ResumeMainHeading,
  ResumeSubHeading,
  ResumeHeadingDescription,
  HeadingDate,
  SkillParent,
  BulletIcons,
  ActivePercentageBar,
  Bullets,
  ExperienceDescription,
  ResumeDescriptionText,
  SkillLabel,
  SkillPercentageContainer,
  ResumeDetailsCarousal,
  StyleContainer,
} from "./resume.style";

const iconMapping = {
  FaGraduationCap: FaGraduationCap,
  FaBriefcase: FaBriefcase,
  FaCode: FaCode,
  FaTasks: FaTasks,
  FaLanguage: FaLanguage,
};

const Resume: React.FC = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState<number>(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<CSSProperties>(
    {}
  );

  const handleCarousal = (index: number) => {
    const offsetHeight = 600; // Adjust height as needed
    setCarousalOffsetStyle({
      transform: `translateY(-${index * offsetHeight}px)`,
    });
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeData.bullets.map((bullet, index) => {
      const IconComponent =
        iconMapping[bullet.icon as keyof typeof iconMapping];
      return (
        <Bullet
          key={index}
          selected={index === selectedBulletIndex}
          onClick={() => handleCarousal(index)}
        >
          <IconComponent size={30} style={{ marginRight: "1rem" }} />
          <BulletLabel>{bullet.label}</BulletLabel>
        </Bullet>
      );
    });
  };

  const getResumeScreens = () => {
    const screens = [
      /* Education */
      <ResumeScreenContainer key="education">
        {resumeData.education.map((edu, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText>{edu.heading}</ResumeDescriptionText>
              <HeadingDate>{`${edu.fromDate} - ${edu.toDate}`}</HeadingDate>
            </ResumeMainHeading>
            <ResumeSubHeading>{edu.subHeading}</ResumeSubHeading>
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer>,

      /* Work History */
      <ResumeScreenContainer key="work-history">
        {resumeData.workHistory.map((work, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText>{work.heading}</ResumeDescriptionText>
              <HeadingDate>{`${work.fromDate} - ${work.toDate}`}</HeadingDate>
            </ResumeMainHeading>
            <ResumeSubHeading>{work.subHeading}</ResumeSubHeading>
            {work.descriptions.map((desc, i) => (
              <ExperienceDescription key={i}>{desc}</ExperienceDescription>
            ))}
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer>,

      /* Skills */
      <ResumeScreenContainer key="skills">
        {resumeData.skills.map((skill, index) => (
          <SkillParent key={index}>
            <SkillLabel>{skill.skill}</SkillLabel>
            <SkillPercentageContainer>
              <ActivePercentageBar percentage={skill.ratingPercentage} />
            </SkillPercentageContainer>
          </SkillParent>
        ))}
      </ResumeScreenContainer>,

      /* Projects */
      <ResumeScreenContainer key="projects">
        {resumeData.projects.map((project, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText>{project.title}</ResumeDescriptionText>
            </ResumeMainHeading>
            <ResumeSubHeading>{project.subHeading}</ResumeSubHeading>
            <ResumeHeadingDescription>
              {project.description}
            </ResumeHeadingDescription>
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer>,

      /* Languages */
      <ResumeScreenContainer key="languages">
        {resumeData.languages.map((language, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText style={{ color: " rgb(6, 208, 1)" }}>
                {language.heading}
              </ResumeDescriptionText>
            </ResumeMainHeading>
            <ResumeHeadingDescription>
              {language.description}
            </ResumeHeadingDescription>
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer>,
    ];

    return (
      <ResumeDetailsCarousal style={carousalOffsetStyle}>
        {screens}
      </ResumeDetailsCarousal>
    );
  };

  return (
    <>
      <ResumeContainer id="resume">
        <ResumeContent>
          <SectionHeading data-text="Resume">Resume</SectionHeading>
          <SectionHeadingLine></SectionHeadingLine>
          <ScrollSection>
            <ResumeCard>
              <ResumeBullets>
                <BulletContainer>
                  <BulletIcons />
                  <Bullets>{getBullets()}</Bullets>
                </BulletContainer>
              </ResumeBullets>
              <ResumeBulletDetails>{getResumeScreens()}</ResumeBulletDetails>
            </ResumeCard>
          </ScrollSection>
        </ResumeContent>
      </ResumeContainer>
      <StyleContainer />
    </>
  );
};

export default Resume;
