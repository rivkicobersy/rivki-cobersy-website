import styled from "styled-components";

const PageContainer = styled.div`
  padding-left: 8rem;
  padding-right: 8rem;
`;

const Section = styled.section`
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;

  background-color: ${(props) => {
    switch (props.id) {
      case "":
        return "lightblue";
      case "about":
        return "lightcoral";
      case "portfolio":
        return "lightgreen";
      case "contact":
        return "lightyellow";
      default:
        return "white";
    }
  }};
`;
export { PageContainer, Section };
