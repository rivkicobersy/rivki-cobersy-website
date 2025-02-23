import { CarouselItem, CarouselWrapper, CarouselWrapperReverse, Container, Header } from "./styles";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

const Carousel = () => {
  return (
    <Container>
      <Header>Have a look at some of my skills and tools...</Header>
      <CarouselWrapper>
        {[...items, ...items].map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselWrapper>

      <CarouselWrapperReverse>
        {[...items, ...items].map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselWrapperReverse>
    </Container>
  );
};

export default Carousel;
