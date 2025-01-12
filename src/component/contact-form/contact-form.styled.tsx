import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants.ts";

export const ContactSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5rem 10rem;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.backgroundPrimaryOpacity},
    ${({ theme }) => theme.colors.backgroundSecondaryOpacity}
  );
  z-index: 10;
    @media (max-width: ${breakpoints.lg}) {
      display: flex;
  flex-direction: column;
  }
`;



export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  width:100%;


  @media (max-width: ${breakpoints.lg}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: ${({ theme }) => theme.colors.lightGray};
    text-transform: uppercase;
    margin-bottom: 3rem;
    text-align: center;
  }
`;
export const ContactForm = styled.form`
  width: 150rem; 
  max-width: 60rem; 
  display: flex;
  flex-direction: column;




  input,
  textarea {
    padding: 1.5rem;
    background-color: #444;
    color: ${({ theme }) => theme.colors.lightGray};;
    border: none;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 0.1rem;

        @media (max-width: ${breakpoints.sm}) {
      font-size: 1.4rem;
      padding: 1rem;
    }
  }

  textarea {
    max-width: 100%;
    max-height: 15rem;
    min-height: 5.5rem;
  }

  input[type="submit"] {
    background-color: ${({ theme }) => theme.colors.buttonPrimary};
    color: #fff;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonSecundary};
    }
          @media (max-width: ${breakpoints.sm}) {
      padding: 0.8rem 1.5rem;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 8rem;
  border: 0.2rem solid #9bec00;

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 2rem;
    border-width: 0.1rem;
  }
`;

export const FormHeading = styled.h1`
  margin-top: 2rem;
  text-align: center;
`;
