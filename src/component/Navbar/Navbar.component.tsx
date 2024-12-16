import { useEffect, useState } from "react";
import { NavbarContainer, Logo, NavList, NavBar } from "./navbar.styled";

//Use the Intersection Observer API to detect when a section is in the viewport and dynamically update the active state of the corresponding nav link.

import navbarData from "../../data/navbarData.json";


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { logo, links } = navbarData;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 399);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe relative to the viewport
      rootMargin: "0px",
      threadId: 0.6, // Trigger when 60% of the section is visible
    };
    const observer = new IntersectionObserver((entries) => {
      let currentActiveSection = "";
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentActiveSection = entry.target.id; // Update active section to the currently intersecting section
        }
      });
  
      if (currentActiveSection) {
        setActiveSection(currentActiveSection); // Set the active section if one is intersecting
      } else if (window.scrollY === 0) {
        setActiveSection(""); // If at the top of the page, set no active section
      }

    }, observerOptions);
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect(); // Clean up on component unmount
  }, []);

  return (
    <NavbarContainer>
      <NavBar
        className={`navbar ${
          isScrolled ? "navbar-colored" : "navbar-transparent"
        }`}
      >
        <Logo>
          <a href="#">
            <img src={logo.src} alt={logo.alt} />
          </a>
        </Logo>
        <NavList>
          {links.map((link, index) => (
            <a key={index} href={link.href} className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}>
              {link.label}
            </a>
          ))}
        </NavList>
      </NavBar>
    </NavbarContainer>
  );
};

export default Navbar;
