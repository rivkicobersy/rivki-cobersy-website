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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 30vh;
  height: 30vh;
  border-radius: 20px;
  perspective: 1000px;
  position: relative;
  z-index: 1;
  transition: box-shadow 0.3s ease;

  &:hover .flip-card-inner {
    transform: rotateX(180deg);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-height: 768px) {
    width: 40vw;
    height: 50vw;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardFront = styled.div`
  background-color: white;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  transform: rotateX(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  object-fit: cover;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure it takes up the full height */
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

const Li = styled.li`
  padding: 1rem;
`;

const Header = styled.h1`
  padding: 1rem;
  text-align: right;
`;

export {
  CardContainer,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  Header,
  Image,
  Li,
  Link,
  PageContainer,
  Section,
  Text,
};
