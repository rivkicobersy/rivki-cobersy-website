import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    margin: 0;
    padding: 0;
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
    // if (props.id === "contact") {
    //   return "55vh";
    // }
    return props.id === "" ? "calc(100vh - 280px)" : "100vh";
  }};
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: ${(props) => {
    switch (props.id) {
      case "portfolio":
        return "lightgreen";
      case "carousel":
        return "lightyellow";
      default:
        return "white";
    }
  }};
  @media (max-width: 999px) and (max-height: 999px) {
    height: 100%;
  }
`;

export { PageContainer, Section, GlobalStyle };
