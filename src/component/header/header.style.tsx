import styled, { keyframes } from "styled-components";

export const HeadeContainer = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const Banner = styled.div`
position: absolute;
top: 35%;
left: 30%;
transform: translateX(-50%);
z-index: 10;
width: 70rem;

`;
export const HeaderText = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const Heading = styled.h1`
  line-height: 15rem;
  white-space: pre-wrap; /* Preserves line breaks */
  font-family: "Bebas Neue", sans-serif;
  font-size: 15rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  width: 100%;
  transform: translateZ(8rem);
  letter-spacing: 0.9rem;
  z-index: 10;

`;

export const ParagraphHeader = styled.p`
  font-size: 5rem;
  color: #16ff00;
`;
export const SubHeading = styled.h3`
  font-size: 3rem;
  color: #bdc3c7;
  letter-spacing: 0.3rem;
  width: 60rem; /* Set a fixed width */
  z-index: 10;
`;
export const PersonImg = styled.img`
  position: absolute;
  width: 40rem;
  height: 40rem;
  top: 20%;
  left: 60%;
  object-fit: cover;
  border-radius: 50%;
  border: 0.1em solid #9bec00;
  background-color: ##111111;
  padding: 3rem;
  opacity: 0.9;
  z-index: 10;
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
export const BannerButton = styled.button`
  margin-top: 2rem;
  width: 20rem;
  height: 5rem;
  background: linear-gradient(to right, #9bec00, #06d001);
  color: #fff;
  font-size: 2rem;

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
