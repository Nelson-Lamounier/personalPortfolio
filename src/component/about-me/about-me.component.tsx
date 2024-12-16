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

  const renderHighlight = (): React.ReactNode[] => {
    return highlights.bullets.map((value, i) => (
      <Highlight key={i}>
        <span>{value}</span>
      </Highlight>
    ));
  };

  return (
    <AboutMeContainer id="about-me">
      <AboutMeParent>
      <SectionHeading>About Me</SectionHeading>
      <SectionHeadingLine />
        <AboutMeCard>
          <AboutMeProfile/>
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
