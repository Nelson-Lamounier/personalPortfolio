import {  FC } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import videoDataInfo from "../../data/videoData.json";


import Carousel from "../carousel/carousel.component";
import {
  SectionHeading,
  SectionHeadingLine,
} from "../commun-styled/commun.styled";

import VideoPlayer from "../video-player/video-player.component";
import {
  ProjectDescriptionContainer,
  Paragraph,
  SkillsList,
  ParentComponent,
  AboutMeDescriptionSubHeading,
  SubButton,
  DemoButton,
  HeroContainer,
} from "./project-description.styled";

const ProjectDecription: FC = () => {
  const { id } = useParams();
  const video = videoDataInfo.videos.find((video) => video.id == parseInt(id!));

  if (!video) {
    return <h2>Project details not found!</h2>;
  }
  return (
    <>
      <ProjectDescriptionContainer id="project-description">
        <HeroContainer>
          <SectionHeading>
            {video.projectName}
            <SectionHeadingLine />
            <SubButton>
            <DemoButton>Demo</DemoButton>
            <DemoButton
              onClick={() =>
                window.open("https://github.com/your-repo", "_blank")
              } // Add your GitHub repo URL
            >
              <FaGithub style={{ marginRight: "10px" }} />
              Code Repository
            </DemoButton>
          </SubButton>
          </SectionHeading>
          <VideoPlayer src={video.Link} />
        </HeroContainer>

        <ParentComponent>
          <div>
            <Paragraph>{video.projectOverview}</Paragraph>
            <Paragraph>{video.projectOutcome}</Paragraph>
          </div>
          <div>
            <AboutMeDescriptionSubHeading>
              Skills Demonstrated
            </AboutMeDescriptionSubHeading>
            <SkillsList>
              {video.skillsDemonstrated.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </SkillsList>
          </div>
        </ParentComponent>

      </ProjectDescriptionContainer>
      <Carousel />
    </>
  );
};

export default ProjectDecription;
