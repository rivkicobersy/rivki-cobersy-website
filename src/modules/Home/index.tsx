import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Contact, Container, Gif, GifWrapper, Icon, Image, ImageWrapper, RightSide, Text, WelcomeText } from "./styles";

const Home = () => (
  <Container>
    <GifWrapper>
      <Gif src="/coding.gif" alt="A fun animation" />
    </GifWrapper>

    <RightSide>
      <WelcomeText>WELCOME! 👋🏻</WelcomeText>
      <ImageWrapper>
        <Image src="/me.jpeg" alt="Profile pic" />
        <Text>
          I'm Rivki — the web developer and designer behind this website. Here you'll find plenty of creative web design
          inspiration, coding tips, and development resources. I hope you enjoy exploring and building with me!
        </Text>
      </ImageWrapper>
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
    </RightSide>
  </Container>
);

export default Home;
