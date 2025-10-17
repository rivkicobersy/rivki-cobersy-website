import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Contact, Container, Gif, GifWrapper, Icon, ImageWrapper, RightSide, Text, WelcomeText } from "./styles";
import { motion } from "motion/react";

const Home = () => (
  <Container>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <GifWrapper>
        <Gif src="/coding.gif" alt="A fun animation" />
      </GifWrapper>
    </motion.div>
    <RightSide>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
      >
        <WelcomeText>WELCOME! 👋🏻</WelcomeText>
      </motion.div>

      <ImageWrapper>
        <Text>
          I'm Rivki — the web developer and designer behind this website. Here you'll find plenty of creative web design
          inspiration, coding tips, and development resources. I hope you enjoy exploring and building with me!
        </Text>
      </ImageWrapper>

      <Contact>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.5 }}
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
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.6 }}
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
          transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.7 }}
        >
          <Icon>
            <a href="https://github.com/rivkicobersy/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} cursor="pointer" color="#c6605c" />
            </a>
          </Icon>
        </motion.div>
      </Contact>
    </RightSide>
  </Container>
);

export default Home;
