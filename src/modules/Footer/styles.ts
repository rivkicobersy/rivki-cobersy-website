import styled from "styled-components";

const Container = styled.div`
  background-color: #ffe4e4;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
  background-size: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 340px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f1f1f1;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  color: #c6605c;
  font-size: 14px;
  margin: 0;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  align-items; right;
  display: flex;
`;

const Contact = styled.div`
  display: flex;
  padding: 3rem;

  @media (max-width: 768px), (max-height: 500px) {
    margin-bottom: 2rem;
    padding: 0;
  }
  @media (max-width: 340px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  padding: 3rem;
  @media (max-width: 768px), (max-height: 500px) {
    padding: 0.5rem;
  }
`;

export { Contact, Container, FooterText, FooterWrapper, Icon, Image };
