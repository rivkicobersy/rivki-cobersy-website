import styled, { keyframes } from "styled-components";

const moveCarousel = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  transform: rotate(-5deg);
`;

const CarouselWrapper = styled.div`
  display: flex;
  animation: ${moveCarousel} 14s linear infinite;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #ccc;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
`;

const CarouselWrapperReverse = styled.div`
  display: flex;
  animation: ${moveCarousel} 14s linear infinite reverse;
  margin-top: 1rem;
`;

const CarouselItemReverse = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #ccc;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
`;

export { CarouselItem, CarouselWrapper, Container, moveCarousel, CarouselWrapperReverse, CarouselItemReverse };
