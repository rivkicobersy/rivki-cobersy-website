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
    height: calc(100% + 10px);
  }
`;

const Right = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  height: 50%;
  border: 10px solid;
  border-image: linear-gradient(135deg, #e5d2c9, transparent) 1;

  @media (min-width: 768px) {
    height: calc(100% - 10px);
    width: 100%;
  }
`;

export { Right, Left, ContentWrapper };
