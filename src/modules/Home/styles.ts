import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
`;

const RightSide = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-gap: 0;
`;

const WelcomeText = styled.h1`
  text-align: center;
  font-size: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
  margin-top: 20px;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffe4e4;
  border-top: 1px solid #ffe4e4;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export { Container, Image, ImageWrapper, RightSide, Text, WelcomeText, Contact, Icon };
