import styled from "styled-components";
import { breakpoints } from "../commun-styled/constants.ts";

export const AboutMeContainer = styled.section`
  position:relative;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: 10;
  padding: 5rem 15rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 3rem 10rem;
  }
    @media (max-width: ${breakpoints.lg}) {
      display: flex;
      flex-direction: column;
  }

  @media (max-width: ${breakpoints.md}) 
    padding: 1rem 0.5rem;
  }



`;

export const AboutMeCard = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 0 5rem;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
    
`;

export const AboutMeDetails = styled.div`
  text-align: justify;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
          @media (max-width: ${breakpoints.xs}) 
    padding: 0;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 2.5rem;
  font-weight: 200;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const AboutMeDescriptionHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: 500;
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  font-size: 4rem;
  background: linear-gradient(to right, #06d001, #00a8e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${breakpoints.md}) {
    font-size: 3rem;
  }
`;
