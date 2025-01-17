import { FC } from "react";
import aboutMeData from "../../data/aboutMeData.json";

import ScrollSection from "../motion/scroll.component";

import {
  HeroButton,
  SectionHeading,
  SectionHeadingLine,
} from "../commun-styled/commun.styled";

import {
  AboutMeContainer,
  AboutMeCard,
  AboutMeDetails,
  AboutMeDescription,
  AboutMeDescriptionSubHeading,
} from "./about-me.style";

const AboutMe: FC = () => {
  const { description, profile, title } = aboutMeData;

  const resumeUrl =
  "https://freelance-portfolio-nelson.s3.eu-west-1.amazonaws.com/resume/developer/Nelson+Lamounier+Leao-Resume.pdf"; // Replace with actual URL

  return (
    <AboutMeContainer id="about-me">
      <SectionHeading data-text={title}>{title}</SectionHeading>
      <SectionHeadingLine />
      <ScrollSection>
        <AboutMeCard>
          <AboutMeDetails>
            <AboutMeDescriptionSubHeading>
              {profile.role}
            </AboutMeDescriptionSubHeading>
            <AboutMeDescription>{description}</AboutMeDescription>
            <HeroButton href={resumeUrl} download="Nelson_Resume.pdf">{profile.buttonText}</HeroButton>
          </AboutMeDetails>
        </AboutMeCard>
      </ScrollSection>
    </AboutMeContainer>
  );
};

export default AboutMe;
