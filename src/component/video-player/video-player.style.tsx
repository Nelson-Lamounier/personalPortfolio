import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants";

export const Controls = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(calc(100% - 0.4rem));
  transition: transform 0.4s;
  display: none;
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
export const VideoWrapper = styled.div`
  width: 90%;
  height: 60%;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.7);
  overflow: hidden;
  ${Controls}:hover & {
  transform: translateY(0);
  margin-right: 20rem;




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
