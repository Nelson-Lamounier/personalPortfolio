import styled from "styled-components";

export const ContactInfoContainer = styled.section`
  width: 100%;
  z-index: 10;
  background-color: #111111;
`;

// Wrapper for Projects
export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 12rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  background-color: #00000;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s;
  border: 0.1rem solid rgb(6, 208, 1);
`;

// Project Text
export const ContactText = styled.div`
  text-align: center;
  letter-spacing: 0.1rem;
  position: absolute;
  top: -10rem;
  z-index: 10;
  transition: top 0.3s;
  font-size: 2rem;

  ${InfoContainer}:hover & {
    top: 6rem;
    transition: top 0.3s 0.3s;
  }
`;

// Project Link
export const ProjectLink = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: transparent;
  position: absolute;
  bottom: -5rem;
  transition: bottom 0.3s;
  ${InfoContainer}:hover & {
    bottom: 5rem;
    transition: bottom 0.3s 0.3s;
  }
`;

// Project Name
export const ContactName = styled.h3`
  font-size: 3rem;
  font-weight: 100;
  color: #06d001;
  text-transform: uppercase;
`;

// Project Technologies
export const ContactNameInfo = styled.h4`
  font-size: 1.8rem;
  color: #06d001;
`;

export const SectionHeading = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 5rem;
  font-weight: 300;
  color: #ddd;
  text-align: center;
`;
export const SectionHeadingLine = styled.div`
  height: 0.3rem;
  margin: 1rem auto;
  background-color: #16ff00;
  margin-bottom: 10rem;
`;
export const IconContainer = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 5rem;
  justifycontent: center;
  margin: 10rem;

`;
export const SocialIconLink = styled.a`
  color: #ffff;
  transition: color 0.3s ease, transform 0.3s ease;
  :hover {
    color: #06d001;
  }
`;
