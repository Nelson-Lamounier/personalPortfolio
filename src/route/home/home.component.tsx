/** @format */

import Header from "../../component/header/header.component";
import { useMediaQuery } from "react-responsive";

import AboutMe from "../../component/about-me/about-me.component";
import Projects from "../../component/projects/project.component";
import ContactForm from "../../component/contact-form/contact-form.component";

import { HomeContainer, Section } from "./home.style";

import Resume from "../../component/resume/resume.component";
import ContactInfo from "../../component/contact/info/contact-info.component";

// Define the props type for the component

const Home = () => {
  const isAbove640px = useMediaQuery({ minWidth: 640 });
  return (
    <HomeContainer>
      <Section id="home">
        <Header />
      </Section>
      <Section id="about-me">
        <AboutMe />
      </Section>
      <Section id="portfolio">
        <Projects />
      </Section>
      {isAbove640px && (
        <Section id="resume">
          <Resume />
        </Section>
      )}
      <Section id="contact">
        <ContactForm />
        <ContactInfo />
      </Section>
    </HomeContainer>
  );
};

export default Home;
