import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  background-image: url("/desk.png");
  background-size: cover;
  height: 50%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const RightContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  height: 50%;
  border: 10px solid;
  border-image: linear-gradient(135deg, #ffe4e4, transparent) 1;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  font-family: "Poppins", sans-serif;
  animation: fadeIn 1.5s ease-out;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Heading = styled.h1`
  font-size: 5vw;
  color: #c6605c;
  margin-bottom: 20px;
  font-family: "Dancing Script", cursive;
  animation: none; /* Default no animation */
  overflow-wrap: break-word;

  &.bounce {
    animation: bounce 1s ease-in-out 1; /* Trigger bounce animation only once */
  }

  @media (max-width: 768px) {
    font-size: 6vw;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  margin: 15px 0;
  max-width: 600px;
  font-weight: 300;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0;
  }
  @media (max-width: 400px) {
    font-size: 10px;
    margin: 10px 0;
  }
`;

const StrongText = styled.strong`
  color: #c6605c;
`;

const EmphasizedText = styled.em`
  font-style: italic;
`;

export { RightContainer, Heading, Paragraph, StrongText, EmphasizedText, Left, ContentWrapper };
