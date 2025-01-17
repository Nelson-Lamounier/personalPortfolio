import { FC, useState } from "react";

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
  const { description, profile, title } = aboutMeData;

  const fetchResumeUrl = async () => {
    try {
      const response = await axios.get("/.netlify/functions/getResumeUrl");
      const url = response.data.url;

      // Fetch the file and force download
      const res = await fetch(url);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Nelson_Lamounier_Leao_Resume.pdf";
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
            <AboutMeDescription>{description}</AboutMeDescription>
            <HeroButton onClick={fetchResumeUrl}>{profile.buttonText}</HeroButton>
          </AboutMeDetails>
        </AboutMeCard>
      </ScrollSection>
    </AboutMeContainer>
  );
};

export default AboutMe;
