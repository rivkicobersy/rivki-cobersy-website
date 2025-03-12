import styled from "styled-components";

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: rgba(252, 232, 232, 0.6);
  border: 2px solid #c6605c;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 500px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 280px;
  max-height: 280px;
  margin: 0 auto;
  display: block;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  color: #c6605c;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #c6605c;
`;

export { Image, SliderContainer, Card, Title, Description };
