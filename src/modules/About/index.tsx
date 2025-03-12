import { ContentWrapper, Left, RightContainer, Heading, Paragraph, StrongText, EmphasizedText } from "./styles";

//TODO more responsive

const About = () => {
  return (
    <ContentWrapper>
      <Left></Left>
      <RightContainer>
        <Heading>Hey there! 👋🏻</Heading>
        <Paragraph>
          I'm a Summa Cum Laude graduate with a Bachelor of Arts in{" "}
          <EmphasizedText>Computer Information Science</EmphasizedText> and a minor in{" "}
          <EmphasizedText>Health Science at</EmphasizedText> <StrongText> Touro College.</StrongText>
        </Paragraph>
        <Paragraph>
          I completed a super fun Full Stack Bootcamp at <StrongText>Actualize</StrongText> where I learned Ruby on
          Rails and React JavaScript.
        </Paragraph>
        <Paragraph>
          Since 2023, I've been working at <StrongText>Trackmatic</StrongText>, where I get to work on both the backend
          and frontend!
        </Paragraph>
        <Paragraph>
          I love how both sides of development come together to create seamless and functional web applications, and I'm
          excited to continue learning and growing in the tech industry!
        </Paragraph>
      </RightContainer>
    </ContentWrapper>
  );
};

export default About;
