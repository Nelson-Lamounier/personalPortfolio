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
            <HeroButton>{profile.buttonText}</HeroButton>
          </AboutMeDetails>
        </AboutMeCard>
      </ScrollSection>
    </AboutMeContainer>
  );
};

export default AboutMe;
