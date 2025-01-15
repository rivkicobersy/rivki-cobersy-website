import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
`;

const RightSide = styled.div`
  display: grid;
`;

const WelcomeText = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-top: 20px;
  margin-right: 20px;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #b3b1b1;
  border-top: 1px solid #b3b1b1;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export { Container, Image, ImageWrapper, RightSide, Text, WelcomeText, Contact, Icon };
