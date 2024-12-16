import React, { useState, useEffect, FC, CSSProperties } from "react";
import resumeData from "../../data/resumeData.json"
import ScrollService from "../util/scroll";
import Animations from "../util/animation";
import { FaGraduationCap, FaBriefcase, FaCode, FaTasks, FaMusic } from "react-icons/fa";

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
  BulletLogo,
  ResumeScreenContainer,
  ResumeHeadingContainer,
  ResumeMainHeading,
  HeadingBullet,
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
} from "./resume.style";

const iconMapping = {
  FaGraduationCap: FaGraduationCap,
  FaBriefcase: FaBriefcase,
  FaCode: FaCode,
  FaTasks: FaTasks,
  FaMusic: FaMusic,
};

const Resume: React.FC = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState<number>(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<CSSProperties>({});

  const handleCarousal = (index: number) => {
    const offsetHeight = 500; // Adjust height as needed
    setCarousalOffsetStyle({ transform: `translateY(-${index * offsetHeight}px)` });
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeData.bullets.map((bullet, index) => {
      const IconComponent = iconMapping[bullet.icon as keyof typeof iconMapping];
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
      </ResumeScreenContainer >,

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
      </ResumeScreenContainer >,

      /* Skills */
      <ResumeScreenContainer  key="skills">
        {resumeData.skills.map((skill, index) => (
          <SkillParent key={index}>
            <SkillLabel>{skill.skill}</SkillLabel>
            <SkillPercentageContainer>
              <ActivePercentageBar percentage={skill.ratingPercentage} />
            </SkillPercentageContainer>
          </SkillParent>
        ))}
      </ResumeScreenContainer >,

      /* Projects */
      <ResumeScreenContainer  key="projects">
        {resumeData.projects.map((project, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText>{project.title}</ResumeDescriptionText>
              <HeadingDate>{`${project.duration.fromDate} - ${project.duration.toDate}`}</HeadingDate>
            </ResumeMainHeading>
            <ResumeSubHeading>{project.subHeading}</ResumeSubHeading>
            <ResumeHeadingDescription>{project.description}</ResumeHeadingDescription>
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer >,

      /* Interests */
      <ResumeScreenContainer  key="interests">
        {resumeData.interests.map((interest, index) => (
          <ResumeHeadingContainer key={index}>
            <ResumeMainHeading>
              <ResumeDescriptionText>{interest.heading}</ResumeDescriptionText>
            </ResumeMainHeading>
            <ResumeHeadingDescription>{interest.description}</ResumeHeadingDescription>
          </ResumeHeadingContainer>
        ))}
      </ResumeScreenContainer >,
    ];

    return <ResumeDetailsCarousal style={carousalOffsetStyle}>{screens}</ResumeDetailsCarousal>;
  };

  return (
    <ResumeContainer id="resume">
      <ResumeContent>
        <SectionHeading>Resume</SectionHeading>
        <SectionHeadingLine></SectionHeadingLine>
        <ResumeCard>
          <ResumeBullets>
            <BulletContainer>
            <BulletIcons/>
              <Bullets>{getBullets()}</Bullets>
            </BulletContainer>
          </ResumeBullets>
          <ResumeBulletDetails>{getResumeScreens()}</ResumeBulletDetails>
        </ResumeCard>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
