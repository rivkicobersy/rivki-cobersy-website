import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../common";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  padding-top: 2rem;
`;

const Gif = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <Button onClick={handleGoHome}>Back to Home</Button>
      <Gif src="/404.gif" alt="A fun animation" />
    </PageContainer>
  );
};

export default ErrorPage;
