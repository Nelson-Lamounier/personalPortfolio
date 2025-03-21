import React, { useState } from "react";
import contactData from "../../data/contactFormData.json";
import {
  SectionHeading,
  SectionHeadingLine,
} from "../commun-styled/commun.styled";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios"; // Ensure axios is installed: yarn add axios

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

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://9rqd7ylmf3.execute-api.eu-west-1.amazonaws.com/Prod/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <SectionHeading data-text={sectionHeading}>
        {sectionHeading}
      </SectionHeading>
      <SectionHeadingLine />
      <ContactWrapper>
        <FormHeading>{formHeading}</FormHeading>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <ContactForm onSubmit={handleSubmit}>
            {formFields.map((field, index) =>
              field.type === "textarea" ? (
                <motion.textarea
                  key={index}
                  variants={inputVariants}
                  name="message"
                  placeholder={field.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></motion.textarea>
              ) : (
                <motion.input
                  key={index}
                  variants={inputVariants}
                  type={field.type}
                  name={field.type === "email" ? "email" : "name"}
                  placeholder={field.placeholder}
                  value={field.type === "email" ? formData.email : formData.name}
                  onChange={handleChange}
                  required
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
  );
};

export default Contact;