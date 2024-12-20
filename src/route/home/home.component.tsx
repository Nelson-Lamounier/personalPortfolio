import { FC, useState } from "react";
import Header from "../../component/header/header.component";

import ParticleBackground from "../../component/particles.component/particle-backgound.component";
import AboutMe from "../../component/about-me/about-me.component";
import Projects from "../../component/projects/project.component";
import ContactForm from "../../component/contact-form/contact-form.component";

import { ThemeProvider } from "styled-components";
import { theme } from "../../component/commun-styled/commun.styled";
import Footer from "../../component/footer/footer.component";

import { HomeContainer, HeaderWrapper } from "./home.style";

import Resume from "../../component/resume/resume.component";
import ContactInfo from "../../component/contact/info/contact-info.component";

// Define the props type for the component

const Home = () => {
  return (
    <HomeContainer>
      <Header />

      <AboutMe />
      <Projects />
      <Resume />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
