import { Container, RightSide, WelcomeText, Contact, Icon } from "./styles";

const Home = () => {
  return (
    <Container>
      <div>Home Page</div>
      <RightSide>
        <WelcomeText>WELCOME!</WelcomeText>
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
};

export default Home;
