import styled, { keyframes } from "styled-components";

const moveCarousel = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  transform: rotate(-3deg);
`;

const Header = styled.h1`
  width: 100%;
  transform: rotate(3deg);
  padding: 2rem;
  text-align: center;
  display: block;
`;

const CarouselWrapper = styled.div`
  display: flex;
  animation: ${moveCarousel} 14s linear infinite;
  margin: 0;
  padding: 0;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 350px;
  height: 150px;
  background-color: #ffe4e4;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #4caf50;
  }
`;

const CarouselWrapperReverse = styled.div`
  display: flex;
  animation: ${moveCarousel} 14s linear infinite reverse;
  padding-top: 1rem;
  margin: 0;
`;

export { CarouselItem, CarouselWrapper, Container, moveCarousel, CarouselWrapperReverse, Header };
