import React from "react";
import contactData from "../../data/contactFormData.json";
import {SectionHeading, SectionHeadingLine} from "../commun-styled/commun.styled"
import {
  ContactSection,

  ContactWrapper,
  FormHeading,
  ContactForm
} from "./contact-form.styled";

const Contact: React.FC = () => {
  const { sectionHeading, formHeading, formFields, submitButton } =
    contactData;

  return (
    <ContactSection>
      <SectionHeading>{sectionHeading}</SectionHeading>
      <SectionHeadingLine />
      <ContactWrapper>
        <FormHeading>{formHeading}</FormHeading>
        <ContactForm>
          {formFields.map((field, index) =>
            field.type === "textarea" ? (
              <textarea key={index} placeholder={field.placeholder}></textarea>
            ) : (
              <input key={index} type={field.type} placeholder={field.placeholder} />
            )
          )}
          <input type="submit" value={submitButton.value} />
        </ContactForm>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;