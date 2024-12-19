import { useRef, useState, FC } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import videoDataInfo from "../../data/videoData.json";

import Carousel from "../carousel/carousel.component";

import { FaPlayCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import {
  ProjectDescriptionContainer,
  SectionHeading,
  VideoWrapper,
  Video,
  Controls,
  VideoBarWrapper,
  VideoBar,
  Button,
  Paragraph,
  IconWrapper,
  SkillsList,
  Technologies,
  ParentComponent,
  AboutMeDescriptionSubHeading,
  SubButton,
  DemoButton,
  HeaderContainer,
} from "./video-player.component";

const VideoPlayer: FC = () => {
  const { id } = useParams();
  const video = videoDataInfo.videos.find((video) => video.id == parseInt(id!));

  if (!video) {
    return <h2>Project details not found!</h2>;
  }
  return (
    <>
    <ProjectDescriptionContainer id="project-description">
        <HeaderContainer>
        <SectionHeading>{video.projectName}</SectionHeading>
        <VideoWrapper>
          <Video src={video.Link} controls></Video>
          <Controls>
            <VideoBarWrapper>
              <VideoBar />
            </VideoBarWrapper>
            <Button>
              <FaPlayCircle />
            </Button>
          </Controls>
        </VideoWrapper>
          </HeaderContainer>
      <ParentComponent>
        {/* Project Overview */}
        <Paragraph>{video.projectOverview}</Paragraph>
        {/* Skills Demonstrated */}
        {/* Technologies Used */}
          <Paragraph>{video.projectOutcome}</Paragraph>
        <AboutMeDescriptionSubHeading>
          Skills Demonstrated
        </AboutMeDescriptionSubHeading>
        <SkillsList>
          {video.skillsDemonstrated.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </SkillsList>
      <SubButton>

      <DemoButton>Demo</DemoButton>
      <DemoButton
      onClick={() => window.open("https://github.com/your-repo", "_blank")} // Add your GitHub repo URL
    >
      <FaGithub style={{ marginRight: "10px" }} />
      Code Repository
    </DemoButton>
      </SubButton>
      </ParentComponent>

    </ProjectDescriptionContainer>
      <Carousel/>
    </>
  );
};

export default VideoPlayer;
