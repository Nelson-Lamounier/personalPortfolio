import { FC } from "react";
import headerData from "../../data/headerData.json";
import Typical from "react-typical";

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
    <HeadeContainer id="section-1">
      <Banner>
        <ParagraphHeader>{paragraphHeader}</ParagraphHeader>
        <Heading>{heading}</Heading>
        <SubHeading>
          <Typical loop={Infinity} wrapper="span" steps={subHeading} />
        </SubHeading>
        <BannerButton>{buttonText}</BannerButton>
      </Banner>
      <PersonImg src={personImage.src} alt={personImage.alt} />
    </HeadeContainer>
  );
};

export default Header;
