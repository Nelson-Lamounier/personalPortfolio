import { FC, useEffect } from "react";
import contactInfoData from "../../../data/contactInfoData.json";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import * as Icons from "react-icons/fa6";

type IconKey = keyof typeof Icons;

interface ContactDetails {
  icon: IconKey;
  title: string;
  items: string[];
}

interface ContactInfoData {
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

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Observe the section when it's 20% in view

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the animations of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Trigger animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <ContactInfoContainer>
        <SectionHeading>Contact Info</SectionHeading>
        <ContactWrapper className="center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {contactDetails.map((info, index) => {
              const IconComponent = Icons[info.icon]; // Dynamically resolve the icon component
              return (
                <motion.div key={index} variants={itemVariants} >
                  <InfoContainer key={index}>
                    <ContactText>
                      <ContactName>{info.title}</ContactName>
                    </ContactText>
                    {IconComponent && <IconComponent size={50} />}{" "}
                    {/* Render the icon */}
                    {info.items.map((item, itemIndex) => (
                      <ProjectLink key={itemIndex}>{item}</ProjectLink>
                    ))}
                  </InfoContainer>
                </motion.div>
              );
            })}
          </motion.div>
        </ContactWrapper>
      </ContactInfoContainer>
    </>
  );
};

export default ContactInfo;
