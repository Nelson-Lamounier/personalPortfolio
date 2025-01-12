import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ProjectDescriptionContainer = styled.section`
  width: 100%;
  z-index: 10;

`;

export const SectionHeading = styled.div`
  position: relative;
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 15rem 10rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 8rem 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 5rem 1rem;
  }
`;

export const ParentComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 5rem 0 10rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column; /* Stack items on smaller screens */
    padding: 0 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.5;
  letter-spacing: 0.2rem;
  margin: 4rem 10rem;
  font-weight: 200;

  @media (max-width: ${breakpoints.md}) {
    text-align: center; 
  
  }
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  background: linear-gradient(to right, #06d001, #00a8e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 200;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;


  li {
    margin: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 200;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.textGradientStart},
      ${({ theme }) => theme.colors.textGradientEnd}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: 10;
`;

export const DemoButton = styled.button`
  width: 100%;
  background-color: transparent;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.buttonPrimary};
  border: 0.1rem solid ${({ theme }) => theme.colors.buttonPrimary};
  cursor: pointer;
  margin: 0 2rem 0 0;
  padding: 1rem;

  font-size: clamp(1rem, 2vw, 1.5rem);

  &:hover {
    color: ${({ theme }) => theme.colors.buttonSecundary};
    border: 0.1rem solid ${({ theme }) => theme.colors.buttonSecundary};
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    width: 15rem;
    height: 3rem;
    font-size: 1.4rem;
  }
`;
