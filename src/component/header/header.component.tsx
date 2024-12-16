import { FC } from "react";
import headerData from "../../data/headerData.json";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";



import {
  HeadeContainer,
  Heading,
  PersonImg,
  SubHeading,
  BannerButton,
  ParagraphHeader,
  Banner,
} from "./header.style";
// React Component
const Header: FC = () => {
  const { paragraphHeader, heading, subHeading, buttonText, personImage } =
    headerData;

  return (
    <HeadeContainer id="home">
      <Banner>
        <ParagraphHeader>{paragraphHeader}</ParagraphHeader>
        <Heading>{heading}</Heading>
  
        <SubHeading>
        <Typewriter
            options={{
              strings: subHeading, // Pass an array of strings to type
              autoStart: true,
              loop: true, // Enable infinite looping
              deleteSpeed: 50, // Speed at which text is deleted
              delay: 75, // Speed at which characters are typed
            }}
          />
        </SubHeading>
        <BannerButton>{buttonText}</BannerButton>
      </Banner>
      <PersonImg src={personImage.src} alt={personImage.alt} />
    </HeadeContainer>
  );
};

export default Header;
