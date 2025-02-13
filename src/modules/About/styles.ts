import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 40vh;
  height: 50vh;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  perspective: 1000px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover .flip-card-inner {
    transform: rotateX(180deg);
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardFront = styled.div`
  background-color: #ffe4e4;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffe4e4;
  color: black;
  transform: rotateX(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: calc(100% - 2rem); /* Subtract padding from the width */
  height: calc(100% - 2rem); /* Subtract padding from the height */
  object-fit: cover;
  border-radius: 20px;
  padding: 1rem; /* Add padding inside the image */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: normal;
  position: relative;
  transition: font-weight 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export { Image, PageContainer, Section, Text, FlipCard, FlipCardInner, FlipCardBack, FlipCardFront, Link };
