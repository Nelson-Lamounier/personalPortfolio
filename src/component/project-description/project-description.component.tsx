import {  FC } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import videoDataInfo from "../../data/videoData.json";
import ProjectDetails from "../project-details/project-detail.component";
import Projects from "../projects/project.component";



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
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id!, 10); // Convert string id to number

  const video = videoDataInfo.videos.find((video) => video.id === projectId);

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
            <DemoButton href={video.Demo}>Demo</DemoButton>
            <DemoButton href={video.Repository}
            >
              <FaGithub style={{ marginRight: "10px" }} />
              Code Repository
            </DemoButton>
          </SubButton>
        </HeroContainer>
          <VideoPlayer src={video.Link} />
      </ProjectDescriptionContainer>
      
      <ProjectDetails video={video}  />
      <Projects excludeProjectIds={[projectId]} sectionTitle="Other Projects" />
    
    </>
  );
};

export default ProjectDecription;
