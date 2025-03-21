import { FC } from "react";

import axios from "axios";
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
  const {  profile, title } = aboutMeData;

  const fetchResumeUrl = async () => {
    try {
      const response = await axios.get("https://wn7zvmv3fg.execute-api.eu-west-1.amazonaws.com/prod/download");

      const parsedBody = response.data.body ? JSON.parse(response.data.body) : response.data
      const url = parsedBody.url;
      
      // Fetch the file and force download
      const res = await fetch(url);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Nelson_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error fetching resume:", error);
    }
  };

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
            {aboutMeData.description.map((para, index) => (
              <AboutMeDescription key={index}> {para}</AboutMeDescription>
            ))}
            <HeroButton onClick={fetchResumeUrl}>
              {profile.buttonText}
            </HeroButton>
          </AboutMeDetails>
        </AboutMeCard>
      </ScrollSection>
    </AboutMeContainer>
  );
};

export default AboutMe;
