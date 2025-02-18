// src/components/Carousel/Carousel.js
import React from "react";
import { CarouselContainer, CarouselWrapper, CarouselWrapperReverse, CarouselItem, Container } from "./styles";

const Carousel = () => {
  return (
    <Container>
      {/* First carousel (moves left to right) */}
      <CarouselContainer>
        <CarouselWrapper>
          {/* First set of items */}
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
          <CarouselItem>Item 4</CarouselItem>
          <CarouselItem>Item 5</CarouselItem>
          {/* Duplicate the items to create a seamless loop */}
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
          <CarouselItem>Item 4</CarouselItem>
          <CarouselItem>Item 5</CarouselItem>
        </CarouselWrapper>
      </CarouselContainer>

      {/* Second carousel (moves right to left) */}
      <CarouselContainer>
        <CarouselWrapperReverse>
          {/* First set of items */}
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
          <CarouselItem>Item 4</CarouselItem>
          <CarouselItem>Item 5</CarouselItem>
          {/* Duplicate the items to create a seamless loop */}
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
          <CarouselItem>Item 4</CarouselItem>
          <CarouselItem>Item 5</CarouselItem>
        </CarouselWrapperReverse>
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
