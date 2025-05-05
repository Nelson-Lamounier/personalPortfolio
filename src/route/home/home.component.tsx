/** @format */

import Header from "../../component/header/header.component";
import { useMediaQuery } from "react-responsive";

import AboutMe from "../../component/about-me/about-me.component";
import Projects from "../../component/projects/project.component";
import ContactForm from "../../component/contact-form/contact-form.component";

import { HomeContainer } from "./home.style";

import Resume from "../../component/resume/resume.component";
import ContactInfo from "../../component/contact/info/contact-info.component";

// Define the props type for the component

const Home = () => {
  const isAbove640px = useMediaQuery({ minWidth: 640 });
  return (
    <HomeContainer>
      <section id="home">
        <Header />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      {isAbove640px && (
        <section id="resume">
          <Resume />
        </section>
      )}
      <section id="contact">
        <ContactForm />
        <ContactInfo />
      </section>
    </HomeContainer>
  );
};

export default Home;
