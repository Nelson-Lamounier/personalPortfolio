import { FC } from "react";
import headerData from "../../data/headerData.json";
import Typewriter from "typewriter-effect";
import { HeroButton } from "../commun-styled/commun.styled";

import {
  HeaderContainer,
  Heading,
  PersonImg,
  SubHeading,
  ParagraphHeader,
  Banner,
} from "./header.style";
// React Component
const Header: FC = () => {
  const { paragraphHeader, heading, subHeading, buttonText, personImage } =
    headerData;

  return (
    <HeaderContainer id="home">
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
        <HeroButton href="#portfolio">{buttonText}</HeroButton>
      </Banner>

      <PersonImg src={personImage.src} alt={personImage.alt} />
    </HeaderContainer>
  );
};

export default Header;
