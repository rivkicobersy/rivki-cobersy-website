import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  animation: move 10s linear infinite;

  &:nth-child(2) {
    animation: moveReverse 10s linear infinite;
  }

  & > div {
    display: flex;
    gap: 15px;
    flex-direction: row;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffa07a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transform: rotate(-30deg);
`;

const move = `
  @keyframes move {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(0deg);
    }
  }
`;

const moveReverse = `
  @keyframes moveReverse {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(50%) rotate(0deg);
    }
  }
`;

export const MovingCarousel = () => {
  return (
    <>
      <style>{move}</style>
      <style>{moveReverse}</style>

      <CarouselContainer>
        <Carousel>
          <Row>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
          </Row>
        </Carousel>
        <Carousel>
          <Row>
            <Item>Item A</Item>
            <Item>Item B</Item>
            <Item>Item C</Item>
            <Item>Item D</Item>
            <Item>Item E</Item>
          </Row>
        </Carousel>
      </CarouselContainer>
    </>
  );
};
