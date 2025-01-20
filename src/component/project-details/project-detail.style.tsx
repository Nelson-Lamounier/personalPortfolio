import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ParentComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 5rem;
  

  @media (max-width: ${breakpoints.xl}) {
    padding: 4rem;
  }


  @media (max-width: ${breakpoints.lg}) {
    padding: 3rem;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
  }
`;



export const Image = styled.img`
  width: 100rem;
  height: auto;
    @media (max-width: ${breakpoints.xl}) {
     width: 80rem;
    height: auto;
  }

    @media (max-width: ${breakpoints.lg}) {
         width: 50rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 70rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
       width: 60rem;
    height: auto;
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10rem 0;
  &:nth-child(even) {
    flex-direction: row-reverse;

      @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 5rem 0;
  }
  }


  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 5rem 0;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 2rem 0;
  }
`;

export const MediaContainer = styled.div`
  width: 80%; 
  height: auto;

    @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Video = styled.video`
  width: 100rem;
  height: auto;

    @media (max-width: ${breakpoints.xl}) {
     width: 80rem;
    height: auto;
  }

    @media (max-width: ${breakpoints.lg}) {
         width: 50rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 70rem;
    height: auto;
  }

  @media (max-width: ${breakpoints.sm}) {
       width: 60rem;
    height: auto;
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.5;
  letter-spacing: 0.2rem;
  font-weight: 200;

    @media (max-width: ${breakpoints.xl}) {
    padding: 0 1rem;
     font-size: 2rem;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 0 1rem;
     font-size: 1.5rem;
  }
  
  @media (max-width: ${breakpoints.md}) {
    padding: 0 0.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const AboutMeDescriptionSubHeading = styled.h3`
  margin-bottom: 2rem;
  background: linear-gradient(to right, #06d001, #00a8e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
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

  @media (max-width: 320px) {
    font-size: 1.5rem;
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
      font-size: 1.8rem;
    }

    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.5rem;
    }

    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;