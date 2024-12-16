
import {FC} from "react"
import contactInfoData from "../../../data/contactInfoData.json" with { type: "json" };

import SocialLinks from "../social-link/social-link.component";

import * as Icons from "react-icons/fa6";

type IconKey = keyof typeof Icons;

interface ContactDetails {
  icon:IconKey;
  title:string;
  items: string[];
}

interface ContactInfoData{
  contactDetails: ContactDetails[];
}

const contactInfoDataTyped = contactInfoData as ContactInfoData;

import {
  ContactInfoContainer,
  SectionHeading,
  InfoContainer,
  ContactWrapper,
  ProjectLink,
  ContactName,
  ContactText,

} from "./contact-info.styled";

const ContactInfo: FC = () => {
  const { contactDetails } = contactInfoDataTyped;

  return (
    <>
    <ContactInfoContainer id="contact" >
      <SectionHeading>Contact Info</SectionHeading>
      <ContactWrapper className="center">
        {contactDetails.map((info, index) => {
          const IconComponent = Icons[info.icon]; // Dynamically resolve the icon component

          return (
            <InfoContainer key={index}>
              <ContactText>
                <ContactName>{info.title}</ContactName>
              </ContactText>
              {IconComponent && <IconComponent size={50} />} {/* Render the icon */}
                {info.items.map((item, itemIndex) => (
                  <ProjectLink key={itemIndex}>{item}</ProjectLink>
                ))}
            </InfoContainer>
          );
        })}
      </ContactWrapper>

    </ContactInfoContainer>
    </>
  );
};

export default ContactInfo;
