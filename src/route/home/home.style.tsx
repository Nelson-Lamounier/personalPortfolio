import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto; /* Adjust based on Header's height */

  /* Ensure ParticleBackground stays in the Header */
  .particle-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Behind Header */
  }
`;