import styled from "styled-components";

const breakpoints = {
  xl: "1200px",
  lg: "1024px",
  md: "768px",
  sm: "576px",
  xs: "480px",
};

export const ContactSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10rem;
  background: radial-gradient(rgba(48, 48, 48, 0.95), rgba(0, 0, 0, 0.95));
  z-index: 10;
`;



export const ContactWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: #ccc;
    text-transform: uppercase;
    margin-bottom: 3rem;
    text-align: center;
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

export const ContactItem = styled.div`
  text-align: center;
  width: 25rem;
  text-align: center;
  margin: 4rem;

  i {
    font-size: 5rem;
    color: #7a1010;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-family: "MADE Soulmaze", sans-serif;
    font-size: 2.5rem;
    margin: 2rem 0;
    color: #ccc;
  }
  p {
    font-size: 1.6rem;
    color: #aaa;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.2rem;
    }
  }
`;

export const FormHeading = styled.h1`
  margin-top: 2rem;
  text-align: center;
`;

export const ContactForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 1.5rem;
    background-color: #444;
    color: #eee;
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
    background-color: rgb(6, 208, 1, 0.9);
    color: #fff;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: rgb(6, 208, 1, 0.5);
    }
          @media (max-width: ${breakpoints.sm}) {
      padding: 0.8rem 1.5rem;
  }
`;
