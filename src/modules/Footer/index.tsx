import { Contact, Container, FooterText, FooterWrapper, Icon, Image } from "./styles";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <div>
    <Container>
      <Image src="/logo.gif" />
      <Contact>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <Icon>
            <a href="mailto:test@gmail.com">
              <FaEnvelope size={30} cursor="pointer" color="#c6605c" />
            </a>
          </Icon>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.3 }}
        >
          <Icon>
            <a href="https://www.linkedin.com/in/rivkacobersy/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} cursor="pointer" color="#c6605c" />
            </a>
          </Icon>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.6 }}
        >
          <Icon>
            <a href="https://github.com/rivkicobersy/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} cursor="pointer" color="#c6605c" />
            </a>
          </Icon>
        </motion.div>
      </Contact>
    </Container>
    <FooterWrapper>
      <FooterText>Copyright ©2025 Rivki Cobersy, all rights reserved.</FooterText>
      <FooterText>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </FooterText>
    </FooterWrapper>
  </div>
);

export default Footer;
