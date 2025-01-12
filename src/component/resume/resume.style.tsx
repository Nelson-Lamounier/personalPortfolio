import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

interface BulletProps {
  selected: boolean;
}
export const StyleContainer = styled.div`
  width: 100%;
  padding: 10rem 5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );
  z-index: 10;
`;

export const ResumeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
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
  box-shadow: 1.5rem 0 0.9rem -15px ${({ theme }) => theme.colors.accent};
  height: 100%;
  width: 40%;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const ResumeBulletDetails = styled.div`
  font-size: 2rem;
  flex-grow: 1;
  width: 10%;
  overflow: hidden;
  transition: transform 0.6s ease-out;
  z-index: 10;
  padding: 0 3rem;
  color: ${({ theme }) => theme.colors.lightGray};

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
  color: ${({ theme }) => theme.colors.light};
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
  margin: 3rem 0;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.accent : theme.colors.light};
  border: ${({ theme, selected }) =>
    selected ? `0.1rem solid ${theme.colors.accent}` : `transparent`};
  height: 5rem;

  border-radius: 2.5rem;
  padding: 2rem 1rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease, width 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border: 0.1rem, solid, ${({ theme }) => theme.colors.accent};

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
    color: ${({ theme }) => theme.colors.lightGray};
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
  color: ${({theme}) => theme.colors.accent}
`;

export const ResumeHeadingDescription = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  z-index: 10;
`;

export const HeadingDate = styled.span`
  border: 0.1rem solid ${({theme}) => theme.colors.accent};
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


// Skill label
export const SkillLabel = styled.span`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.lightGray};
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
  background-color: ${({theme}) => theme.colors.accent};
  width: ${(props) => props.percentage}%;
`;
