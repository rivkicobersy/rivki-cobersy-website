import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffe4e4;
  width: 75%;
  min-height: 75%;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background: white;
  width: 100%;
  max-width: 900px;
  height: auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2rem;
  padding: 0;
  color: #c6605c;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
`;

const ReCAPTCHAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  margin-top: 20px;
  width: 100%;
`;

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export { ContentWrapper, Title, FormWrapper, Container, ReCAPTCHAWrapper, StyledReCAPTCHA };
