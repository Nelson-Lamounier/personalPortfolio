import styled from "styled-components";

export const NavbarContainer = styled.nav`
position: relative;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  transition: background-color 0.3s ease;

  &.navbar-transparent {
    background-color: transparent;
  }

  &.navbar-colored {
    background-color: #555;
    color: #fff;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index:10;

  img {
    height: 5rem;
    width: auto;
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  z-index:10;
  

  .nav-link {
    margin: 0 1rem;
    text-decoration: none;
    color: #ccc;
    font-size: 1.6rem;
    transition: color 0.3s;

    &:hover {
      color: #7a1010;
    }
  }
`;