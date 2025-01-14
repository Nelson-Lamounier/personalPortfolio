import styled from "styled-components";

import { breakpoints } from "../commun-styled/constants";

export const NavbarContainer = styled.nav`
  position: relative;
  width: 100%;
  z-index: 1000;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  z-index: 100;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  padding: 4rem;
  background-color: red;

  &.navbar-transparent {
    background-color: transparent;
  }

  &.navbar-colored {
    background-color: #111111;
    box-shadow:  0.1rem 0.5rem 0.5rem ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
  @media (max-width: ${breakpoints.lg}) {
    padding: 3rem;
  }
  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
  }


`;

export const Logo = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  img {
    height: 8rem;
    width: auto;

      @media (max-width: ${breakpoints.lg}) {
      height: 5rem;
            @media (max-width: ${breakpoints.md}) {
      height: 5rem;
    }

    @media (max-width: ${breakpoints.sm}) {
      height: 4rem;
    }
  }
`;

// Navigation List
export const NavList = styled.div`
  display: flex;
  gap: 10rem;

  @media (max-width: ${breakpoints.lg}) {
  
    gap: 10rem;
  }

  @media (max-width: ${breakpoints.md}) {
    gap: 5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 3rem;
  }

  .nav-link {
    text-decoration: none;
    color: #ccc;
    font-size: clamp(1.8rem, 2vw, 5rem);
    font-family: "Bebas Neue", sans-serif;
    font-weight: 900;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #06d001;
    }

    &.active {
      color: rgb(6, 208, 1, 0.95);
      font-weight: bold;
      border-bottom: 0.2rem solid rgb(6, 208, 1, 0.95);
    }
  }
`;

// Mobile Menu Icon
export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 3rem;
    color: #ccc;

    &:hover {
      color: #06d001;
    }
  }
`;

export const MobileNavMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  flex-direction: column;
  background-color: #111;
  padding: 2rem 0;

  a {
    color: #fff;
    font-size: 1.8rem;
    margin: 1rem 0;
    text-align: center;

    &:hover {
      color: #06d001;
    }

    &.active {
      color: #06d001;
      font-weight: bold;
    }
  }
`;
