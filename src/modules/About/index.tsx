import { ContentWrapper, Left, RightContainer, Heading, Paragraph, StrongText, EmphasizedText } from "./styles";
import { motion } from "motion/react";

const About = () => {
  return (
    <ContentWrapper>
      <Left></Left>
      <RightContainer>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
        >
          <Heading>Hey there! 👋🏻</Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        >
          <Paragraph>
            I'm a Summa Cum Laude graduate with a Bachelor of Arts in{" "}
            <EmphasizedText>Computer Information Science</EmphasizedText> and a minor in{" "}
            <EmphasizedText>Health Science at</EmphasizedText>{" "}
            <StrongText href="https://www.touro.edu/" target="_blank" rel="noopener noreferrer">
              {" "}
              Touro College.
            </StrongText>
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.4 }}
        >
          <Paragraph>
            I completed a super fun Full Stack Bootcamp at{" "}
            <StrongText href="https://anyonecanlearntocode.com/" target="_blank" rel="noopener noreferrer">
              Actualize
            </StrongText>{" "}
            where I learned Ruby on Rails and React JavaScript.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.5 }}
        >
          <Paragraph>
            Since 2023, I've been working at{" "}
            <StrongText href="https://trackmatic.co.za/" target="_blank" rel="noopener noreferrer">
              Trackmatic
            </StrongText>
            , where I get to work on both the backend and frontend!
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.6 }}
        >
          <Paragraph>
            I love how both sides of development come together to create seamless and functional web applications, and
            I'm excited to continue learning and growing in the tech industry!
          </Paragraph>
        </motion.div>
      </RightContainer>
    </ContentWrapper>
  );
};

export default About;
