import { CarouselItem, CarouselWrapper, Container } from "./styles";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

const Carousel = () => {
  return (
    <Container>
      <CarouselWrapper>
        {[...items, ...items].map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselWrapper>
    </Container>
  );
};

export default Carousel;
