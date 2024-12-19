import styled from "styled-components";

// Section container
export const OtherProjectsContainer = styled.section`
  width: 100%;
   background: linear-gradient(-180deg, #111111, #434343);
  text-align: center;
  padding: 5rem 0;
`;

// Section heading
export const SectionHeading = styled.h2`
  font-size: 4rem;
  color: #b8b8b8;
`;

// Section heading line
export const SectionHeadingLine = styled.div`
  width: 10rem;
  height: 0.2rem;
  background-color: #16ff00;
  margin: 1rem auto 2rem;
`;

// Swiper container
export const SwiperContainer = styled.div`
  width: 90%;
  margin: auto;
`;



// Front side of pricing card
export const CardFront = styled.div`
  text-align: center;
  padding: 10rem;
  
`;

// Pricing card heading
export const CardHeading = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
   color: #16ff00;
   font-weight:100;
`;


export const SubHeadingCard = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #95a5a6;
`;




// Pricing card button
export const PricingCardButton = styled.button`
  background-color: #16ff00;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    background-color: #14e600;
  }
`;

// Back side of pricing card
export const PricingCardBack = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #16ff00;
  color: #fff;
  border-radius: 0.5rem;
`;

// Image styling
export const StyledImage = styled.img`
  width: 60rem;
  transition: opacity 0.3s;
  border: 0.1em solid #9bec00;
  background-color: #111111;
  padding: 3rem;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;