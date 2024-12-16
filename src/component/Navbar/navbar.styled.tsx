import styled from "styled-components";

const breakpoints = {
  xl: "1200px",
  lg: "1024px",
  md: "768px",
  sm: "576px",
  xs: "480px",
};


export const NavbarContainer = styled.nav`
  position: relative;
   width: 100%;
  z-index: 1000;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: rem;
  display: flex;
  justify-content: center;
  z-index: 100;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  padding: 4rem;

  &.navbar-transparent {
    background-color: transparent;
  }

  &.navbar-colored {
    background-color: #111111;
    color: #fff;
  }

    @media (max-width: ${breakpoints.md}) {
    padding: 1rem 3rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 10rem;
  img {
    height: 8rem;
    width: auto;

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
  align-items: center;
  gap: 10rem;

  @media (max-width: ${breakpoints.md}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    gap: 1rem;
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
