import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 10%;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 1%;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  object-fit: contain;

  @media (max-height: 500px) {
    width: 100%;
    height: auto;
  }
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
  width: 100%;
  border-bottom: 1px solid #ffe4e4;
  border-top: 1px solid #ffe4e4;
  @media (max-width: 768px), (max-height: 500px) {
    margin-bottom: 2rem;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export { Contact, Container, Gif, Icon, Image, ImageWrapper, RightSide, Text, WelcomeText, GifWrapper };
