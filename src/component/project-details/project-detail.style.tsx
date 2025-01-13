import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ParentComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 5rem 20rem;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column; /* Stack items on smaller screens */
    padding: 0 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 0.5rem;
    
  }
`;

export const Paragraph = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.5;
  letter-spacing: 0.2rem;
  margin: 4rem 10rem;
  font-weight: 200;

  @media (max-width: ${breakpoints.lg}) {

     padding: 0 1rem;
  }
  @media (max-width: ${breakpoints.md}) {
padding: 0 0.5rem;
     font-size: 1.5rem;
  }
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  background: linear-gradient(to right, #06d001, #00a8e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 200;
  z-index: 10;

    @media (max-width: ${breakpoints.lg}) {
     padding: 0 5rem;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem ;

  li {
    margin: 1rem;
    padding: 1rem 1.5rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 200;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.textGradientStart},
      ${({ theme }) => theme.colors.textGradientEnd}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

      @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
  }
`;