import styled from "styled-components";

import { breakpoints } from "@/component/commun-styled/constants";

export const ContactInfoContainer = styled.section`

  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 10rem 2rem;


  color: ${({ theme }) => theme.colors.accent};



  @media (max-width: ${breakpoints.md}) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 3rem 1rem;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;


    @media (max-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 12rem;

  justify-content: center;
  align-items: center;
  margin: 3rem;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.5s;
  border: 0.1rem solid rgb(6, 208, 1);

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const ContactText = styled.div`
  text-align: center;
  letter-spacing: 0.1rem;
  position: absolute;
  top: -10rem;
  z-index: 10;
  transition: top 0.3s;
  font-size: 2rem;

  ${InfoContainer}:hover & {
    top: 6rem;
    transition: top 0.3s 0.3s;
  }
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.6rem;
  }
`;

export const ProjectLink = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: transparent;
  position: absolute;
  bottom: -5rem;
  transition: bottom 0.3s;
  ${InfoContainer}:hover & {
    bottom: 5rem;
    transition: bottom 0.3s 0.3s;
  }
`;

export const ContactName = styled.h3`
  font-size: 3rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const SectionHeading = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
  }
`;
