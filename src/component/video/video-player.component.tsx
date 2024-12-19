import styled from "styled-components";

export const ProjectDescriptionContainer = styled.section`
  width: 100%;

`;

export const HeaderContainer = styled.div`
     width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(360deg, #111111, #434343);
  justify-content: space-between; 
  position: relative;g 
  z-index: 10;
  color: #e7e7e7;
  padding: 20rem 10rem;
`;

export const ParentComponent = styled.div`

  display: flex;
flex-direction: column;
  background-color: #111111;
  justify-content: space-between; 
  position: relative; 
  z-index: 10;
  color: #a0a0a0;
  padding: 5rem 30rem;
  

`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #16ff00;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const SubButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SectionHeading = styled.h1`
  font-size: 10rem;
  font-family: "Bebas Neue", sans-serif;
  width: 20%;
`;

export const Paragraph = styled.p`
  font-size: 3.5rem;
  color: #b8b8b8;
  line-height: 1.5;
  letter-spacing: 0.4rem;
  margin: 5rem 0 10rem 0;
`;

export const Controls = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(calc(100% - 0.4rem));
  transition: transform 0.4s;
  display: none;
`;

export const VideoWrapper = styled.div`
  width: 70%;
  height: 40%;

  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.7);
  overflow: hidden;
  ${Controls}:hover & {
  transform: translateY(0);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.1rem;
  transition: opacity 0.3s;
  background-color: #16ff00;
  margin-right: 20rem;
`;

export const SkillsList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 0.5rem;
    padding: 1rem 1.5rem;
    border: 0.1rem solid rgb(6, 208, 1, 0.9);
    border-radius: 0.5rem;
    font-size: 1.5rem;
    color: #b8b8b8;
  }
`;

export const Technologies = styled.div`
  font-size: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  strong {
    color: #95a5a6;
  }
`;

export const VideoBarWrapper = styled.div`
  width: 100%;
  height: 0.7rem;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
`;

export const VideoBar = styled.div`
  height: 100%;
  width: 0;
  background-color: #d30819;
  transition: width 0.2s linear;
`;

export const Button = styled.button`
  padding: 2rem 1rem 1rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const IconWrapper = styled.span`
  margin: 0 5px;
  font-size: 1.5rem;
  color: #333;
`;

export const DemoButton = styled.button`
  width: 100%;
  height: 6rem;
  background-color: rgb(6, 208, 1, 0.9);
  color: #fff;
  cursor: pointer;
  border: none;
  margin: 2rem 2rem 0 0;
  padding: 1rem;
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.5rem);

  &:hover {
    background-color: rgb(6, 208, 1, 0.5);
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
