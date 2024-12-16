import styled from "styled-components";

const breakpoints = {
  xl: "1200px",
  lg: "1024px",
  md: "768px",
  sm: "480px",
};

// Container for Section 3
export const ProjectContainer = styled.section`
  width: 100%;
  padding: 10rem 5rem;
  background: radial-gradient(rgba(48, 48, 48, 0.95), rgba(0, 0, 0, 0.95));
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

// Wrapper for Projects
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

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
  background-color: #00000;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s;

  
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%; /* Ensure projects take full width on small screens */
  }
`;

// Project Text
export const ProjectText = styled.div`
  text-align: center;
  letter-spacing: 0.1rem;
  position: absolute;
  top: -10rem;
  z-index: 10;
  transition: top 0.3s;

  ${Project}:hover & {
    top: 5rem;
    transition: top 0.3s 0.3s;
  
  }
`;

// Project Name
export const ProjectName = styled.h3`
  font-size: 3rem;
  font-weight: 100;
  color: #06d001;
  text-transform: capitalize;

    @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`;

// Project Technologies
export const ProjectTechnologies = styled.h4`
  font-size: 1.8rem;
  color: #06d001;

    @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

// Project Image
export const ProjectImg = styled.img`
  width: 40rem;
  transition: opacity 0.3s;
  border: 0.1em solid #9bec00;
  background-color: ##111111;
  padding: 3rem;
  opacity: 0.9;

  ${Project}:hover & {
    opacity: 0.1;
  }

    @media (max-width: ${breakpoints.md}) {
    width: 30rem;
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%; /* Ensure image scales down on smaller screens */
    padding: 1rem;
  }
`;

// Project Link
export const ProjectLink = styled.a`
  font-size: 2rem;
  font-weight: 100;
  color: #fff;
  letter-spacing: 0.1rem;
  border: 0.1rem solid #fff;
  padding: 0 1rem;
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
