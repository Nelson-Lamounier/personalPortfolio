import { FC } from "react";
import aboutMeData from "../../data/aboutMeData.json";

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
  const { description, profile } = aboutMeData;

  return (
    <AboutMeContainer id="about-me">
      <SectionHeading>About Me</SectionHeading>
      <SectionHeadingLine />
      <AboutMeCard>
        <AboutMeDetails>
          <AboutMeDescriptionSubHeading>
            {profile.role}
          </AboutMeDescriptionSubHeading>
          <AboutMeDescription>{description}</AboutMeDescription>
          <HeroButton>{profile.buttonText}</HeroButton>
        </AboutMeDetails>
      </AboutMeCard>
    </AboutMeContainer>
  );
};

export default AboutMe;
