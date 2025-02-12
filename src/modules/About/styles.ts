import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 350px; /* Default width */
  height: 400px;
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
    width: 250px; /* Make the cards take up full width on small screens */
    height: 200px; /* Adjust the height */
    margin-bottom: 10px; /* Add space between cards */
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
  width: 80%;
  height: 80%;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

export { Image, PageContainer, Section, Text, FlipCard, FlipCardInner, FlipCardBack, FlipCardFront };
