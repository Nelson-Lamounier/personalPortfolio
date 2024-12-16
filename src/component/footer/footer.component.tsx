import footerData from "../../data/footerData.json";
import SocialLinks from "../contact/social-link/social-link.component";

import { FooterContainer, FooterNav, CopyrightText } from "./footer.styled";
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterNav>
      <SocialLinks/>
      </FooterNav>
      <CopyrightText>{footerData.copyright}</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
