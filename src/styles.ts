import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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

const PageContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

const Section = styled.section`
  height: ${(props) => {
    if (props.id === "carousel") {
      return "30vh";
    }
    return props.id === "" ? "calc(100vh - 280px)" : "100vh";
  }};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: ${(props) => {
    switch (props.id) {
      case "portfolio":
        return "lightgreen";
      case "contact":
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
