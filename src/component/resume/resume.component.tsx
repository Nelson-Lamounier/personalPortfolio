import React, { useState, useEffect, FC, CSSProperties } from "react";
import ScrollService from "../util/scroll";
import Animations from "../util/animation";
import educationLogo from "../../assets/Resume/education.svg";
import workHistoryLogo from "../../assets/Resume/work-history.svg";
import programmingSkillsLogo from "../../assets/Resume/programming-skills.svg";
import projectsLogo from "../../assets/Resume/projects.svg";
import interestsLogo from "../../assets/Resume/interests.svg";

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

interface ResumeProps {
  id?: string;
}

interface ResumeHeadingProps {
  heading: string;
  subHeading?: string;
  description?: string;
  fromDate?: string;
  toDate?: string;
}

interface Skill {
  skill: string;
  ratingPercentage: number;
}

interface Project {
  title: string;
  duration: { fromDate: string; toDate: string };
  description: string;
  subHeading: string;
}

interface Bullet {
    label: string;
    logoSrc: string;
  }
  

const Resume: React.FC<ResumeProps> = ({ id }) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState<number>(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<CSSProperties>(
    {}
  );

  const fadeInScreenHandler = (screen: { fadeInScreen: string }) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id || "");
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading: FC<ResumeHeadingProps> = ({
    heading,
    subHeading,
    description,
    fromDate,
    toDate,
  }) => {
    return (
      <ResumeHeadingContainer>
        <ResumeMainHeading>
          <HeadingBullet />
          <span>{heading || ""}</span>
          {fromDate && toDate && (
            <HeadingDate>{`${fromDate} - ${toDate}`}</HeadingDate>
          )}
        </ResumeMainHeading>
        {subHeading && <ResumeSubHeading>{subHeading}</ResumeSubHeading>}
        {description && (
          <ResumeHeadingDescription>{description}</ResumeHeadingDescription>
        )}
      </ResumeHeadingContainer>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: educationLogo },
    { label: "Work History", logoSrc: workHistoryLogo },
    { label: "Skills", logoSrc: programmingSkillsLogo },
    { label: "Projects", logoSrc: projectsLogo },
    { label: "Interests", logoSrc: interestsLogo },
  ];

  const programmingSkillsDetails: Skill[] = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Typescript", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails: Project[] = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Mobile E-shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online with payment system integration",
      subHeading:
        "Technologies Used: React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration.",
      subHeading:
        "Technologies Used: Mongo DB, Express Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    /* Education */
    <ResumeScreenContainer key="education">
      <ResumeHeading
        heading="University of Legon Accra, Ghana"
        subHeading="BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"
        fromDate="2014"
        toDate="2018"
      />
      <ResumeHeading
        heading="National Youth Service Corps"
        subHeading="Ministry Of Science And Technology. Uyo Akwa Ibom State"
        fromDate="2019"
        toDate="2020"
      />
      <ResumeHeading
        heading="High School"
        subHeading="Command Secondary School Mbiri"
        fromDate="2007"
        toDate="2012"
      />
    </ResumeScreenContainer>,
    /* Work Experience */
    <ResumeScreenContainer key="work-experience">
      <ResumeHeading
        heading={"Ehizeex Technoloy"}
        subHeading={"FULL STACK DEVELOPER INTERN"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <ExperienceDescription>
        <ResumeDescriptionText>
          Currently working as MERN stack web and mobile developer and also an
          online instructor on udemy.
        </ResumeDescriptionText>
      </ExperienceDescription>
      <ExperienceDescription>
        <ResumeDescriptionText>
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </ResumeDescriptionText>
        <br />
        <ResumeDescriptionText>
          - Integrated the web app with backend services to create new user
          onboarding application with dynamic form content.{" "}
        </ResumeDescriptionText>
        <br />
        <ResumeDescriptionText>
          - I stretch my mental capacity to develope UI as per the given
          designs.
        </ResumeDescriptionText>
        <br />
      </ExperienceDescription>
    </ResumeScreenContainer>,

    <ResumeScreenContainer key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <SkillParent key={index}>
        <HeadingBullet />
        <SkillLabel>{skill.skill}</SkillLabel>
        <SkillPercentageContainer>
          <ActivePercentageBar percentage={skill.ratingPercentage} />
        </SkillPercentageContainer>
      </SkillParent>
      ))}
    </ResumeScreenContainer>,
    /* Projects */
    <ResumeScreenContainer key="projects">
      {projectsDetails.map((projects, index) => (
        <ResumeHeading
          key={index}
          heading={projects.title}
          subHeading={projects.subHeading}
          description={projects.description}
          fromDate={projects.duration.fromDate}
          toDate={projects.duration.toDate}
        />
      ))}
    </ResumeScreenContainer>,
    
    /* Interests */
    <ResumeScreenContainer key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </ResumeScreenContainer>,
  ];

  const handleCarousal = (index: number) => {
    const offsetHeight = 500;
    setCarousalOffsetStyle({
      transform: `translateY(-${index * offsetHeight}px)`,
    });
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <Bullet
          key={index}
          selected={index === selectedBulletIndex}
          onClick={() => handleCarousal(index)}
        >
          <BulletLogo src={bullet.logoSrc} alt={`${bullet.label} logo`} />
          <BulletLabel>{bullet.label}</BulletLabel>
        </Bullet>
      ));
  }

  const getResumeScreens = () => {
    return (
        <ResumeDetailsCarousal style={carousalOffsetStyle}>
          {resumeDetails.map((ResumeDetail, index) => (
            <React.Fragment key={index}>{ResumeDetail}</React.Fragment>
          ))}
        </ResumeDetailsCarousal>
    );
} 
useEffect(() => {
  return () => fadeInSubscription.unsubscribe();
}, [fadeInSubscription]);

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
