import styled from "styled-components";
import { fonts, breakpoints } from "../commun-styled/constants.ts";

export const HeaderContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 10;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    height: 80vh;
  }
`;

export const Banner = styled.div`
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
export const HeaderText = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

// Main Heading
export const Heading = styled.h1`
  font-size: clamp(4rem, 8vw, 12rem);
  line-height: 1;
  font-family: ${fonts.family.primary};
  font-weight: 900;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  text-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.5);
  letter-spacing: 0.2rem;
  margin: 0;

  @media (max-width: ${breakpoints.md}) {
    letter-spacing: 0.5rem;
  }
`;

// Paragraph Header
export const ParagraphHeader = styled.p`
  font-size: clamp(2rem, 4vw, 5rem);
  color: ${({ theme }) => theme.colors.accent};
  margin: 1rem 0;
  font-family: ${fonts.family.secondary};
  font-weight: ${fonts.weights.light};
  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
  }
`;

// Sub Heading
export const SubHeading = styled.h3`
  font-size: clamp(1.5rem, 2vw, 3rem); /* Scales between 1.5rem and 3rem */
  color: ${({ theme }) => theme.colors.lightGray};
  letter-spacing: 0.3rem;

  max-width: 90%; /* Adjusts width dynamically */
`;

export const PersonImg = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.1em solid #9bec00;
  margin-right: 10rem;
  padding: 2rem;
  opacity: 0.9;
  z-index: 10;


  @media (max-width: ${breakpoints.xl}) {
    width: 35rem;
    height: 35rem;
    margin-right: 10rem;
  }
      @media (max-width: ${breakpoints.lg}) {
    width: 25rem;
    height: 25rem;
    margin-right: 10rem;
  }


  @media (max-width: ${breakpoints.md}) {
    display: none;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
