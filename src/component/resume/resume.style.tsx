import styled from "styled-components";

interface BulletProps {
  selected: boolean;
}

const breakpoints = {
  xl: "1200px",
  lg: "1024px",
  md: "768px",
  sm: "576px",
  xs: "480px",
};

export const ResumeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;
  background-color: #111111;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    padding: 3rem 5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 2rem;
  }
`;

export const ResumeContent = styled.div`
 width: 80%;
  display: flex;
  flex-direction: column;
  margin: 5rem;

  @media (max-width: ${breakpoints.md}) {
    margin: 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin: 2rem;
  }
`;

export const ResumeCard = styled.div`
  display: flex;
  height: 50rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    height: auto;
  }
`;

export const ResumeBullets = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1.5rem 0 0.9rem -15px #1f2235;
  height: 100%;
  width: 40%;
  padding: 2rem;


  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const ResumeBulletDetails = styled.div`
  flex-grow: 1;
  width: 10%;
  overflow: hidden;

  
  transition: transform 0.6s ease-out; /* Smooth scrolling */
  z-index: 10;
  color: #d2dae2;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const ExperienceDescription = styled.div`
  margin: 1rem 0 0 0;
  text-align: justify;
  max-width: 100%;


  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

export const ResumeDescriptionText = styled.span`
  font-size: 2.5rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.6rem;
  }
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
  color: #d2dae2;
`;

export const Bullets = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const Bullet = styled.div<BulletProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "rgba(6, 208, 1, 0.7);" : "transparent"};
  height: 5rem;

  padding: 2.5rem 1rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease, width 0.3s ease;

  &:hover {
    color: rgb(6, 208, 1, 0.7);
    border: 0.1rem, solid, rgb(6, 208, 1, 0.7);

    @media (max-width: ${breakpoints.sm}) {
      height: 4rem;
      margin: 1rem 0;
    }
  }
`;

export const BulletLabel = styled.span`
  font-size: 2rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

export const BulletLogo = styled.img`
  height: 3rem;
  margin: 0 3rem 0 0;

  @media (max-width: ${breakpoints.sm}) {
    height: 2.5rem;
    margin: 0 1.5rem 0 0;
  }
`;

export const BulletIcons = styled.div`
  width: 6rem;
  height: 100%;
  z-index: 2;
  padding: 2rem;
  position: absolute;
`;

export const ResumeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50rem;
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
    color: #d2dae2;
    font-size: 2rem;
  }
`;

export const HeadingBullet = styled.div`
  position: absolute;
  left: -3rem;
  height: 1.5rem;
  width: 1.5rem;
  top: 0.5rem;
`;

export const ResumeSubHeading = styled.span`
  font-size: 2rem;
  margin: 1rem 0 0 0;
  z-index: 10;
  color: rgb(6, 208, 1, 0.7);
`;

export const ResumeHeadingDescription = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  z-index: 10;
`;

export const HeadingDate = styled.span`
  background-color: rgb(6, 208, 1, 0.7);
  padding: 0.4rem 1.2rem;
  font-size: 1.4rem;
  border-radius: 2%;
`;

export const SkillParent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
  }
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
  color: #d2dae2;
  margin-right: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
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
  background-color: rgb(6, 208, 1, 0.7);
  width: ${(props) => props.percentage}%;
`;

export const SkillParentLabel = styled.span`
  font-size: 2rem;
  color: #d2dae2;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;
