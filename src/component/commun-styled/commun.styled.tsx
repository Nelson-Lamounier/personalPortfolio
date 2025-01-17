import styled, { keyframes } from "styled-components";

import { breakpoints, fonts } from "./constants.ts";


// Keyframes for fade-in animation
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

// Section Heading
export const SectionHeading = styled.h2`
  position: relative; /* Ensures ::after is relative to this component */
  font-family: ${fonts.family.primary};
  font-size: ${fonts.sizes.h2};
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
  margin-right: 4rem;
  z-index: 1;
  line-height: 1;

  &::after {
    content: attr(data-text);
    position: absolute;
    line-height: 0.9;
    top: -3rem;
    left: 0;
    color: #414141;
    opacity: 0.5;
    transform: scaleY(1);
    transform-origin: top;
    width: 100%; /* Scales with the heading */
    font-size: ${fonts.sizes.h1};
    z-index: -1;
    @media (max-width: 768px) {
      font-size: 5rem;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

// Section Heading Line
export const SectionHeadingLine = styled.div`
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

// Banner Button
export const BannerButton = styled.button`
  width: clamp(15rem, 20%, 20rem);
  height: clamp(3rem, 5%, 4rem);
  background: linear-gradient(to right, #9bec00, #06d001);
  color: #fff;
  font-size: clamp(1.5rem, 2.5vw, 2rem); /* Scales font size dynamically */
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

  @media (max-width: ${breakpoints.md}) {
    width: 18rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 15rem;
    height: 3rem;
    font-size: 1.4rem;
  }
`;

export const HeroButton = styled.a`
  font-size: 1.8rem;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.colors.buttonPrimary};
  border: 0.1rem solid ${({ theme }) => theme.colors.buttonPrimary};
  border-radius: 2.5rem;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonSecundary};
    border: 0.1rem solid ${({ theme }) => theme.colors.buttonSecundary};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0.8rem 1.5rem;
  }
`;
