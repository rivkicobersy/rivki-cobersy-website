import { Contact, Container, FooterText, FooterWrapper, Icon, Image } from "./styles";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <div>
    <Container>
      <Image src="/logo.gif" />
      <Contact>
        <Icon>
          <a href="mailto:rachey917@gmail.com">
            <FaEnvelope size={30} cursor="pointer" color="#c6605c" />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.linkedin.com/in/rivkacobersy/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} cursor="pointer" color="#c6605c" />
          </a>
        </Icon>
        <Icon>
          <a href="https://github.com/rivkicobersy/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} cursor="pointer" color="#c6605c" />
          </a>
        </Icon>
      </Contact>
    </Container>
    <FooterWrapper>
      <FooterText>
        &copy; Copyright ©️2025 RivkiCobersy, all rights reserved.
        <br />
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </FooterText>
    </FooterWrapper>
  </div>
);

export default Footer;
