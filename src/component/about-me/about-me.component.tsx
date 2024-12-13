import { FC } from "react";
import aboutMeData from "../../data/aboutMeData.json";

import {
  AboutMeContainer,
  AboutMeParent,
  AboutMeCard,
  AboutMeDetails,
  AboutMeDescription,
  AboutMeDescriptionHeading,
  AboutMeDescriptionSubHeading,
  AboutMeHighlights,
  Highlight,
  SectionHeadingLine,
  BannerButton,
  AboutMeProfile,
  SectionHeading,
} from "./about-me.style";

const AboutMe: FC = () => {
  const { description, highlights, profile } = aboutMeData;

  const renderHighlight = (): JSX.Element[] => {
    return highlights.bullets.map((value, i) => (
      <Highlight key={i}>
        <span>{value}</span>
      </Highlight>
    ));
  };

  return (
    <AboutMeContainer>
      <AboutMeParent>
        <SectionHeading>About Me</SectionHeading>
        <SectionHeadingLine></SectionHeadingLine>
        <AboutMeCard>
          <AboutMeProfile></AboutMeProfile>
          <AboutMeDetails>
            <AboutMeDescriptionHeading>
              Hi there! I'm {profile.name}
            </AboutMeDescriptionHeading>
            <AboutMeDescriptionSubHeading>
              {profile.role}
            </AboutMeDescriptionSubHeading>
            <AboutMeDescription>{description}</AboutMeDescription>
            <AboutMeHighlights>{renderHighlight()}</AboutMeHighlights>
            <BannerButton>{profile.buttonText}</BannerButton>
          </AboutMeDetails>
        </AboutMeCard>
      </AboutMeParent>
    </AboutMeContainer>
  );
};

export default AboutMe;