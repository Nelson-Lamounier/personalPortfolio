import styled from "styled-components";

// Container for Section 3
export const ProjectContainer = styled.section`
margin-top: 5rem
  width: 100%;
  padding: 10rem 0;
  background-color: #0c0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

// Wrapper for Projects
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  background-color: #00000;
  box-shadow: 0.3rem 0.3rem 0.1rem #06d001;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0.3rem 0.3rem 0.3rem #06d001;
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
`;

// Project Technologies
export const ProjectTechnologies = styled.h4`
  font-size: 1.8rem;
  color: #06d001;
`;

// Project Image
export const ProjectImg = styled.img`
  width: 40rem;
  transition: opacity 0.3s;
  ${Project}:hover & {
    opacity: 0.2;
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
`;
