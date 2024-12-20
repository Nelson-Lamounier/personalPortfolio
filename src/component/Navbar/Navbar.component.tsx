import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { NavbarContainer, Logo, NavList, NavBar,  MobileMenuIcon, 
  MobileNavMenu  } from "./navbar.styled";

//Use the Intersection Observer API to detect when a section is in the viewport and dynamically update the active state of the corresponding nav link.

import navbarData from "../../data/navbarData.json";


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current route
  const { logo, links } = navbarData;

    // Check if the user is on the project page
    const isProjectPage = location.pathname.startsWith("/project/");

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY === 0) {
          setIsScrolled(false); // Reset `isScrolled` when at the top
          setActiveSection("home");
        } else if (window.scrollY > 399) {
          setIsScrolled(true); // Set `isScrolled` when scrolling down
        }
      };
    
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe relative to the viewport
      rootMargin: "-50% 0px -50% 0px",
      threadId: 0.5, // Trigger when 60% of the section is visible
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

    // Toggle the mobile menu
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  

    return (
      <NavbarContainer>
        {/* Conditionally Render Navbar */}
        {isProjectPage ? (
          <NavBar className={`navbar ${
              isScrolled ? "navbar-colored" : "navbar-transparent"
            }`}>
            {/* Minimal Navbar for Project Page */}
            <Logo>
              <Link to="/">
                <img src={logo.src} alt={logo.alt} />
              </Link>
            </Logo>
            <NavList>
              <Link to="/" className="nav-link">
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
            {/* Full Navbar for Other Pages */}
            <Logo>
              <a href="#">
                <img src={logo.src} alt={logo.alt} />
              </a>
            </Logo>
            <NavList>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.href.slice(1) ? "active" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </NavList>
            <MobileMenuIcon onClick={toggleMenu}>
              {isMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </MobileMenuIcon>
          </NavBar>
        )}
  
        {/* Mobile Navigation Menu */}
        {!isProjectPage && (
          <MobileNavMenu isOpen={isMenuOpen}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </MobileNavMenu>
        )}
      </NavbarContainer>
    );
  };
  
  export default Navbar;
