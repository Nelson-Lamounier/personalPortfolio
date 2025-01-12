import styled from "styled-components";
import { Link } from "react-router-dom";


import { breakpoints, fonts } from "../commun-styled/constants.ts";

export const StyleContainer = styled.div`
  width: 100%;
  padding: 10rem 5rem;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );
  z-index: 10;
`;

// Container for Section 3
export const ProjectContainer = styled.section`
position: relative;
  width: 100%;
  padding: 10rem 5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    padding: 8rem 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 6rem 2rem;
  }
`;

// Section Heading
export const PortfolioHeading = styled.h2`
  position: relative; 
  font-family: ${fonts.family.primary};
  font-size: ${fonts.sizes.h2};
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  margin-right: 4rem;
  z-index: 1;

  &::after {
    content: attr(data-text);
    position: absolute; 
    top: 10; 
    left: -8rem; 
    color: #414141;
    opacity: 0.5;
    transform: scaleY(1);
    transform-origin: top;
    width: 100%; /* Scales with the heading */
    font-size: ${fonts.sizes.h1};
    z-index: -1;
  }



  }

    @media (max-width: 768px) {
    font-size: 6rem;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

// Section Heading Line
export const PortfolioHeadingLine = styled.div`
  width: 10rem;
  height: 0.2rem;
  background-color: #16ff00;
  margin-bottom: 5rem;

  @media (max-width: ${breakpoints.md}) {
    width: 8rem;
    margin-bottom: 8rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 6rem;
    margin-bottom: 6rem;
  }
`;

// Wrapper for Projects
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10rem 0;

  @media (max-width: ${breakpoints.md}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const Project = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s;

border: 0.1rem solid ${({ theme }) => theme.colors.accent};
  
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%; 
  }
`;

// Project Text
export const ProjectText = styled.div`
  text-align: center;
  letter-spacing: 0.1rem;
  position: absolute;
  top: -15rem;
  z-index: 10;
  transition: top 0.3s;
  ${Project}:hover & {
    top: 10rem;
    transition: top 0.3s 0.3s;
  }
`;

// Project Name
export const ProjectName = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.light};
  text-transform: capitalize;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`;

// Project Technologies
export const ProjectTechnologies = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

// Project Image
export const ProjectImg = styled.img`
  width: 30rem;
  transition: opacity 0.3s;
  border: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding: 2rem;
  opacity: 0.9;

  ${Project}:hover & {
    opacity: 0.1;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 30rem;
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding: 1rem;
  }
`;

// Project Link
export const ProjectLink = styled(Link)`
  font-size: 1.8rem;
  padding: 0.2rem 2rem;
  color: ${({ theme }) => theme.colors.buttonPrimary};
  border: 0.1rem solid ${({ theme }) => theme.colors.buttonPrimary};
  border-radius: 2.5rem;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  bottom: -5rem;
  transition: bottom 0.3s;

  ${Project}:hover & {
    bottom: 5rem;
    transition: bottom 0.3s 0.3s;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
    padding: 0.3rem 0.8rem;
  }
`;
