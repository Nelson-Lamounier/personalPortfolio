import Header from "../../component/header/header.component";

import AboutMe from "../../component/about-me/about-me.component";
import Projects from "../../component/projects/project.component";
import ContactForm from "../../component/contact-form/contact-form.component";


import { HomeContainer,  } from "./home.style";

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
    </HomeContainer>
  );
};

export default Home;
