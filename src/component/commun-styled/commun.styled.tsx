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
  margin-bottom: 10rem;
`;

export const BannerButton = styled.button`
  width: 20rem;
  height: 4rem;
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