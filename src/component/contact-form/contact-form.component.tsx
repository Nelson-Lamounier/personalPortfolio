import React from "react";
import contactData from "../../data/contactFormData.json";
import {
  SectionHeading,
  SectionHeadingLine,
} from "../commun-styled/commun.styled";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



import {
  ContactSection,
  ContactWrapper,
  FormHeading,
  ContactForm,

} from "./contact-form.styled";

const Contact: React.FC = () => {
  const { sectionHeading, formHeading, formFields, submitButton } = contactData;

  // Animation controls and intersection observer
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger input animations
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ContactSection id="contact" ref={ref}>
        <SectionHeading data-text={sectionHeading}>
          {sectionHeading}
        </SectionHeading>
        <SectionHeadingLine />
        <ContactWrapper className="center">
          <FormHeading>{formHeading}</FormHeading>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <ContactForm>
              {formFields.map((field, index) =>
                field.type === "textarea" ? (
                  <motion.textarea
                    key={index}
                    variants={inputVariants}
                    placeholder={field.placeholder}
                  ></motion.textarea>
                ) : (
                  <motion.input
                    key={index}
                    variants={inputVariants}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                )
              )}
              <motion.input
                type="submit"
                value={submitButton.value}
                variants={inputVariants}
              />
            </ContactForm>
          </motion.div>
        </ContactWrapper>
      </ContactSection>
    </>
  );
};

export default Contact;
