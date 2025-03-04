import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(134, 134, 134); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #121212; 
  }

  * {
    scrollbar-width: thin;
    scrollbar-color:rgb(134, 134, 134) #121212;
  }
`;

const PageContainer = styled.div``;

const Section = styled.section`
  height: ${(props) => {
    if (props.id === "carousel") {
      return "80vh";
    }
    return props.id === "" ? "calc(100vh - 280px)" : "100vh";
  }};
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;

  @media (max-width: 999px) and (max-height: 999px) {
    height: 100%;
  }
`;

const StyledAlert = styled.div<{ type: string }>`
  margin: 10px;
  font-size: 0.8rem;
  background-color: ${({ type }) =>
    type === "success" ? "#d4edda" : type === "error" ? "#f8d7da" : type === "info" ? "#d1ecf1" : "transparent"};
  color: ${({ type }) =>
    type === "success" ? "#155724" : type === "error" ? "#721c24" : type === "info" ? "#0c5460" : "black"};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-left: 8px solid
    ${({ type }) =>
      type === "success" ? "#92c89e" : type === "error" ? "#f1a8b2" : type === "info" ? "#a3d0db" : "transparent"};

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export { PageContainer, Section, GlobalStyle, StyledAlert };
