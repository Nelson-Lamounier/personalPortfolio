import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ProjectDescriptionContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );

  @media (max-width: ${breakpoints.lg}) {
    align-items: center;
    height: 70vh;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
`;

export const SectionHeading = styled.div`
  position: relative;
  padding: 10rem;
  background-color: red;
  z-index: 20;
`;

export const HeroContainer = styled.div`
  width: 60%;
  padding-left: 10%;
  text-align: left;
  z-index: 10;

  @media (max-width: ${breakpoints.xl}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
  }
`;

export const SubButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: 10;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: row;
    left: 2rem;
  }
`;

export const DemoButton = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-align: center;
  width: 50%;
  background-color: transparent;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.buttonPrimary};
  border: 0.1rem solid ${({ theme }) => theme.colors.buttonPrimary};
  cursor: pointer;
  margin: 0 2rem 0 0;
  padding: 1rem;
  z-index: 10;

  font-size: clamp(1rem, 2vw, 1.5rem);

  &:hover {
    color: ${({ theme }) => theme.colors.buttonSecundary};
    border: 0.1rem solid ${({ theme }) => theme.colors.buttonSecundary};
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const ProjectSub = styled.p`
  font-size: 2.5rem;
  font-weight: 200;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }
`;
