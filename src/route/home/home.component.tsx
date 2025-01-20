import Header from "../../component/header/header.component";
import { useMediaQuery } from "react-responsive";

import AboutMe from "../../component/about-me/about-me.component";
import Projects from "../../component/projects/project.component";
import ContactForm from "../../component/contact-form/contact-form.component";


import { HomeContainer,  } from "./home.style";

import Resume from "../../component/resume/resume.component";
import ContactInfo from "../../component/contact/info/contact-info.component";

// Define the props type for the component

const Home = () => {
  const isAbove640px = useMediaQuery({ minWidth: 640 });
  return (
    <HomeContainer>
      <Header />
      <AboutMe />
      <Projects />
      {isAbove640px && <Resume />}
      <ContactForm />
      <ContactInfo />
    </HomeContainer>
  );
};

export default Home;
