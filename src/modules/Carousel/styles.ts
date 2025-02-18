import styled, { keyframes } from "styled-components";

const moveCarousel = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Scroll through two sets of items */
  }
`;

// Continuous move to the right (infinite loop)
const moveCarouselReverse = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%); /* Scroll through two sets of items */
  }
`;
const Container = styled.div`
  transform: rotate(-5deg);
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  animation: ${moveCarousel} 20s linear infinite;
  width: 200%; /* Ensures two sets of items are visible */
`;

const CarouselWrapperReverse = styled.div`
  display: flex;
  animation: ${moveCarouselReverse} 20s linear infinite;
  width: 200%; /* Ensures two sets of items are visible */
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 200px; /* Adjust the width based on your needs */
  height: 150px; /* Adjust the height based on your needs */
  background-color: #ccc; /* Placeholder background color */
  margin-right: 20px; /* Adjust the gap between items */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
`;

export {
  CarouselContainer,
  CarouselItem,
  CarouselWrapper,
  CarouselWrapperReverse,
  Container,
  moveCarousel,
  moveCarouselReverse,
};
