import {  FC } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import videoDataInfo from "../../data/videoData.json";
import ProjectDetails from "../project-details/project-detail.component";


import Carousel from "../carousel/carousel.component";
import {
  SectionHeading,
  SectionHeadingLine,
} from "../commun-styled/commun.styled";

import VideoPlayer from "../video-player/video-player.component";
import {
  ProjectDescriptionContainer,
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
            </SectionHeading>
       
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
        </HeroContainer>
          <VideoPlayer src={video.Link} />



      </ProjectDescriptionContainer>
      
      <ProjectDetails video={video}  />
      <Carousel />
    </>
  );
};

export default ProjectDecription;
