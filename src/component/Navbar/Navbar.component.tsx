/** @format */

import { useEffect, useState, FC } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  NavbarContainer,
  Logo,
  NavList,
  NavBar,
  NavButton,
} from "./navbar.styled";

//Use the Intersection Observer API to detect when a section is in the viewport and dynamically update the active state of the corresponding nav link.

import navbarData from "../../data/navbarData.json";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation(); // Get current route
  const navigate = useNavigate();
  const { logo, links } = navbarData;
  const isAbove640px = useMediaQuery({ minWidth: 640 });

  // Check if the user is on the project page
  const isProjectPage = location.pathname.startsWith("/project/");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Clean up on component unmount
  }, []);

  const handleNavigation = (route: string, id: string) => {
    navigate(route);
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <NavbarContainer>
      {/* Conditionally Render Navbar */}
      {isProjectPage ? (
        <NavBar
          className={`navbar ${
            isScrolled ? "navbar-colored" : "navbar-transparent"
          }`}
        >
          {/* Minimal Navbar for Project Page */}
          <Logo>
            <button
              onClick={handleLogoClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
              />
            </button>
          </Logo>
          <NavList>
            <Link
              to="/"
              className="nav-link"
            >
              ← Back to Home
            </Link>
          </NavList>
        </NavBar>
      ) : (
        <NavBar
          className={`navbar ${
            isScrolled ? "navbar-colored" : "navbar-transparent"
          }`}
        >
          <Logo>
            <button
              onClick={handleLogoClick}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
              />
            </button>
          </Logo>
          {!isProjectPage && (
            <NavList>
              {links.map(
                (link, index) =>
                  (isAbove640px || link.label !== "Resume") && (
                    <NavButton
                      key={index}
                      onClick={() => handleNavigation(link.route!, link.id)}
                      className={`nav-link ${
                        activeSection === link.id ? "active" : ""
                      }`}
                    >
                      {link.label}
                    </NavButton>
                  )
              )}
            </NavList>
          )}
        </NavBar>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
