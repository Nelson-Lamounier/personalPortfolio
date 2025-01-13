import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ProjectDescriptionContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  padding: 0 10rem 0 0 ;
  z-index: 10;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );

      @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    justify-content: center;
  padding: 10rem 0 20rem 0 ;
  }
`;

export const SectionHeading = styled.div`
  position: relative;
  padding: 10rem;
  background-color: red;
   z-index: 20;
`;

export const HeroContainer = styled.div`
  width: 50%;
  padding-left: 10%;
  text-align: left;
  z-index: 10;

  @media (max-width: ${breakpoints.lg}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 90%;
    text-align: center;
    padding-left: 0;
  }
`;



export const SubButton = styled.div`
position: absolute;
bottom: 2rem;
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

export const DemoButton = styled.button`
  width: 30rem;
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
