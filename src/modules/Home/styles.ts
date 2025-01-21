import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
`;

const RightSide = styled.div`
  display: grid;
`;

const WelcomeText = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #ffe4e4;
  border-top: 1px solid #ffe4e4;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export { Container, RightSide, WelcomeText, Contact, Icon };
