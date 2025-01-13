import { FC } from "react";
import {
  Paragraph,
  SkillsList,
  ParentComponent,
  AboutMeDescriptionSubHeading,
} from "./project-detail.style.tsx";

interface ProjectDetailsProps {
  video: {
    projectOverview: string;
    projectOutcome: string;
    skillsDemonstrated: string[];
  };
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ video }) => {
  return (
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
  );
};

export default ProjectDetails;