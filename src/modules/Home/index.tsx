import { Contact, Container, Icon, Image, ImageWrapper, RightSide, Text, WelcomeText } from "./styles";

const Home = () => (
  <Container>
    <div>
      <img
        src="/girl.gif"
        alt="A fun animation"
        style={{
          top: 0,
          height: "520px",
        }}
      />
    </div>
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
        <a href="mailto:rachey917@gmail.com">
          <Icon src="/email.jpeg" />
        </a>
        <a href="https://www.linkedin.com/in/rivkacobersy/" target="_blank" rel="noopener noreferrer">
          <Icon src="/linkedin.jpeg" />
        </a>
        <a href="https://github.com/rivkicobersy/" target="_blank" rel="noopener noreferrer">
          <Icon src="/github.jpeg" />
        </a>
      </Contact>
    </RightSide>
  </Container>
);

export default Home;
