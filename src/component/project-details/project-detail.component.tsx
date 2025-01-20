import { FC } from "react";
import {
  Paragraph,
  SkillsList,
  ParentComponent,
  AboutMeDescriptionSubHeading,
  ContentWrapper,
  Image,
  MediaContainer,
  Video,
  ParagraphWrapper,
} from "./project-detail.style.tsx";

interface ProjectDetailsProps {
  video: {
    projectOverview: string;
    projectOutcome: string;
    skillsDemonstrated: string[];
    overviewImage: string;
    Link: string;
  };
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ video }) => {
  return (
    <ParentComponent>
      <ContentWrapper>
        <ParagraphWrapper>
          <AboutMeDescriptionSubHeading>
            The Project
          </AboutMeDescriptionSubHeading>
          <Paragraph>{video.projectOverview}</Paragraph>
        </ParagraphWrapper>
        <MediaContainer>
        <Video key={video.Link} controls>
    <source src={video.Link} type="video/mp4" />
  </Video>
        </MediaContainer>
      </ContentWrapper>
      <ContentWrapper>
      <ParagraphWrapper>
      <AboutMeDescriptionSubHeading>
            The Pages
          </AboutMeDescriptionSubHeading>
        <Paragraph>{video.projectOutcome}</Paragraph>
        </ParagraphWrapper>
        <MediaContainer>
          <Image src={video.overviewImage} alt="Project Overview" />
        </MediaContainer>
      </ContentWrapper>
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
  );
};

export default ProjectDetails;
