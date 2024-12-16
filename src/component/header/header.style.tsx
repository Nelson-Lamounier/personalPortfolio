import styled, { keyframes } from "styled-components";

const breakpoints = {
  xl: "1200px",
  lg: "800px",
  md: "600px",
  sm: "500px",
  xs: "450px",
};

export const HeaderContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row; /* Align items horizontally */
  align-items: center;
  justify-content: space-between; /* Space between the banner and the image */
  position: relative;
  z-index: 10;
  overflow: hidden;


  @media (max-width: ${breakpoints.md}) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    justify-content: center;
  }
`;

export const Banner = styled.div`
  width: 50%; 
  padding-left: 10%; 
  text-align: left; 
  z-index: 10;

  @media (max-width: ${breakpoints.lg}) {
    width: 60%; /* Adjust width for smaller screens */
  }

  @media (max-width: ${breakpoints.md}) {
    width: 90%; /* Full width for very small screens */
    text-align: center; /* Center text for mobile layouts */
    padding-left: 0; /* Remove left padding */
  }
`;
export const HeaderText = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

// Main Heading
export const Heading = styled.h1`
  font-size: clamp(4rem, 8vw, 12rem);
  line-height: 1.2;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  letter-spacing: 0.7rem;
  margin: 0;

  @media (max-width: ${breakpoints.md}) {
    letter-spacing: 0.5rem;
  }
`;


// Paragraph Header
export const ParagraphHeader = styled.p`
  font-size: clamp(2rem, 4vw, 5rem); /* Scales between 2rem and 5rem */
  color: #16ff00;
  margin: 1rem 0;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
  }
`;

// Sub Heading
export const SubHeading = styled.h3`
  font-size: clamp(1.5rem, 2vw, 3rem); /* Scales between 1.5rem and 3rem */
  color: #bdc3c7;
  letter-spacing: 0.3rem;

  max-width: 90%; /* Adjusts width dynamically */
`;

export const PersonImg = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.1em solid #9bec00;
  margin-right: 20rem;
  padding: 5rem;
  opacity: 0.9;
  z-index: 10;

  @media (max-width: ${breakpoints.xl}) {
    width: 35rem;
    height: 35rem;
    margin-right: 10rem;
  }

  @media (max-width: ${breakpoints.md}) {
    display: none; 
  }

  @media (max-width: ${breakpoints.sm}) {
    display: none; 
  }
`;


// Keyframes for the fade animation
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

// Styled component for the button
// Button for Banner
export const BannerButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #9bec00, #06d001);
  color: #fff;
  font-size: clamp(1.2rem, 2vw, 2rem); /* Scales between 1.2rem and 2rem */
  border: 0.1rem solid #9bec00;
  border-radius: 0.5rem;
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
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0.8rem 1.5rem;
  }
`;