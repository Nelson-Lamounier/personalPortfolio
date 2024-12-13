
import styled from "styled-components";

interface BulletProps {
  selected: boolean;
}

export const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;
  margin: 12rem 0;
  background-color: #dfe4ea;
  z-index: 10;
  padding: 10rem;
`;

export const ResumeContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ResumeCard = styled.div`
  display: flex;
  height: 36rem;
  width: 100rem
`;

export const ResumeBullets = styled.div`
  box-shadow: 1.5rem 0 0.9rem -15px #1f2235;
  height: 100%;
  width: 32rem;
  

`;

export const ResumeBulletDetails = styled.div`
  flex-grow: 1;
  width: 60rem;
  overflow: hidden;
  padding: 0 0 0 5rem;
  
  transition: transform 0.6s ease-out; /* Smooth scrolling */
  z-index: 10;


`;

export const ExperienceDescription = styled.div`
  margin: 1rem 0 0 0;
  text-align: justify;
  max-width: 100%;
`;

export const ResumeDescriptionText = styled.span`
  font-size: 2rem;
`;

export const ResumeDetailsCarousal = styled.div`
  transition: transform 1s ease-out;
`;

export const BulletContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 10;
`;

export const Bullets = styled.div`
  width: 86%;
  position: relative;
  z-index: 2;
`;

export const Bullet = styled.div<BulletProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#9BEC00" : "transparent")};
  height: 4rem;
  margin: 1.5rem 0;
  padding: 0 0.8rem;
  border-radius: 2rem;
  width: ${({ selected }) => (selected ? "100%" : "30px")};
  transition: width 0.1s ease;

  &:hover {
    background-color: #9bec00;
  }
`;

export const BulletLabel = styled.span`
  font-size: 2rem;
  white-space: nowrap;
  
`;

export const BulletLogo = styled.img`
  height: 3rem;
  margin: 0 3rem 0 0;
  
`;

export const BulletIcons = styled.div`
  width: 5rem;
  height: 100%;
  z-index: 2;
  background-color: #9bec00;
  
  position: absolute;
  
`;

export const ResumeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 36rem;
  width: 100%;
  
`;

export const ResumeHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeMainHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  span {
    color: #2f3542;
    font-size: 2rem;
    
  }
`;

export const HeadingBullet = styled.div`
  position: absolute;
  left: -3rem;
  height: 1.5rem;
  width: 1.5rem;
  top: 5px;
  border-radius: 50%;

`;

export const ResumeSubHeading = styled.span`
  font-size: 2rem;
  margin: 1rem 0 0 0;
  z-index: 10;
`;

export const ResumeHeadingDescription = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  z-index: 10;
`;

export const HeadingDate = styled.span`
  background-color: #9bec00;
  padding: 0.4rem 1.2rem;
  font-size: 1.4rem;
  border-radius: 1.4rem;
`;

export const SkillParent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
`;

export const ProgrammingSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;



// Skill label
export const SkillLabel = styled.span`
  font-size: 2rem;
  color: #2f3542;
  margin-right: 1rem;
`;

// Skill percentage bar container
export const SkillPercentageContainer = styled.div`
  position: relative;
  height: 2rem;
  width: 100%;
  background-color: #2f3542;
`;

export const ActivePercentageBar = styled.div<{ percentage: number }>`
   height: 2rem;
  transition: 0.8s ease;
  position: absolute;
  background-color: #9bec00;
  width: ${(props) => props.percentage}%;
`;

export const SkillParentLabel = styled.span`
  font-size: 2rem;
  color: #2f3542;
`;


