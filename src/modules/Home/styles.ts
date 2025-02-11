import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    padding-top: 25%;
  }
`;

const WelcomeText = styled.h1`
  text-align: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
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
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: 0px;
  }
`;

const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Gif = styled.img`
  width: 90%;
  height: 90%;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ffe4e4;
  border-top: 1px solid #ffe4e4;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export { Contact, Container, Gif, Icon, Image, ImageWrapper, RightSide, Text, WelcomeText, GifWrapper };
