import styled from "styled-components";
import { breakpoints } from "../commun-styled/commun.styled";

export const AboutMeContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: 10;
  padding: 5rem 15rem;

  @media (max-width: ${breakpoints.md}) {AboutMeCard
    padding: 3rem 1.5rem;
  }
`;

export const AboutMeCard = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10rem;
  @media (max-width:${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeDetails = styled.div`
  text-align: justify;

  @media (max-width: ${breakpoints.xl}) {
    padding: 0 0 2rem 3rem;
    width: 100%;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 3rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;

export const AboutMeDescriptionHeading = styled.h2`
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: 500;

  @media (max-width: ${breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  font-size: 4rem;
  background: linear-gradient(to right, #06d001, #00a8e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;
