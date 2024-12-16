import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  z-index: 10;
  color: #ddd;
  font-family: "Montserrat", serif;
  padding: 10rem 0;
`;

export const AboutMeParent = styled.div`
  width: 80%;
`;

export const AboutMeCard = styled.div`
  display: flex;
  width: 100%;
`;

export const AboutMeProfile = styled.div`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  border-radius: 2%;
  background-image: url("https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/portfolio-website/IMG_0760.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);

`;

export const AboutMeDetails = styled.div`
  width: 70%;
  text-align: justify;
  padding: 0 0 2rem 10rem;
`;

export const AboutMeDescription = styled.p`
  font-size: 2rem;
  color: #95a5a6;
`;

export const AboutMeDescriptionHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: 500;
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #16ff00;
  font-weight: 100;
`;

export const AboutMeHighlights = styled.div`
  margin: 2rem 0;
`;

export const HighlightHeading = styled.h4`
  color: #16ff00;
  font-size: 2rem;
`;

export const Highlight = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #95a5a6;
  padding: 0.5rem 0;
`;

export const SectionHeading = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 10rem;
  font-weight: 300;
  color: #ddd;
  margin-right: 4rem;
`;

export const SectionHeadingLine = styled.div`
  width: 10rem;
  height: 0.2rem;
  background-color: #16ff00;
  margin-bottom: 5rem;
`;

export const BannerButton = styled.button`
  width: 20rem;
  height: 4rem;
  background: linear-gradient(to right, #9bec00, #06d001);
  color: #fff;
  font-size: 2rem;
  border-radius: 3%;
  border: 0.1rem solid #9bec00;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  animation: ${fadeAnimation} 1s 2s forwards;
  position: relative;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #fff, transparent);
    position: absolute;
    top: 0;
    left: -100%;
    transform: skewX(-30deg);
    transition: left 0.5s;
    z-index: 10;
  }

  &:hover::before {
    left: 100%;
    z-index: 10;
  }
`;

export const AboutMeOptions = styled.div`
  display: flex;
  flex-direction: column;
`;
