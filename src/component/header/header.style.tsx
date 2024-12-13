import styled, { keyframes } from "styled-components";


export const HeadeContainer = styled.div`

width: 100%;
height: 100vh;
z-index: 10;
`;

export const Banner = styled.div`
position: absolute;
top: 30%;
left: 30%;
transform: translateX(-50%);
z-index: 10;
`;
export const HeaderText = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 300px; /* Set a fixed width */
`;

export const Heading = styled.h1`
  line-height: 9rem;
  white-space: pre-wrap; /* Preserves line breaks */
  font-family: "Oswald", serif;
  font-size: 10rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  width: 100%;
  transform: translateZ(8rem);
  letter-spacing: 1.1rem;
  z-index: 10;
  width: 20rem; /* Set a fixed width */
`;

export const ParagraphHeader = styled.p`
  font-size: 5rem;
  color: #16ff00;
`;
export const SubHeading = styled.h3`
  font-size: 6rem;
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
  border: 0.1em dotted #9bec00;
  background-color: #9bec00;
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
  border-radius: 3rem;
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
