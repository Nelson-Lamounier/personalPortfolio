
import SocialLinks from "../contact/social-link/social-link.component";

import { FooterContainer, FooterNav, CopyrightText } from "./footer.styled";
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterNav>
      <SocialLinks/>
      </FooterNav>
      <CopyrightText>"Copyright © Nelson Lamounier All Rights Reserved"</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
