import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: relative;
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
`;

export const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 10rem;
  img {
    height: 8rem;
    width: auto;
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;

  .nav-link {
    margin: 0 4rem;
    text-decoration: none;
    color: #ccc;
    font-size: 4rem;
    transition: color 0.3s;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 900;
  }

  &:hover {
    color: #06d001;
  }
  .nav-link.active {
    color: rgb(6, 208, 1, 0.95);
    font-weight: bold;
    border-bottom: 0.1rem solid rgb(6, 208, 1, 0.9);
  }
`;
