import styled from "styled-components";

export const IconContainer = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 5rem;
  justifycontent: center;


`;
export const SocialIconLink = styled.a`
  color: #ffff;
  transition: color 0.3s ease, transform 0.3s ease;
  :hover {
    color: #06d001;
  }
`;