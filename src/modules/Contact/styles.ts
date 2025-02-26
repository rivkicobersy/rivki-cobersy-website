import styled from "styled-components";

const Footer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #f1f1f1;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  color: #333;
  font-size: 14px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { Footer, FooterText, ContentWrapper };
