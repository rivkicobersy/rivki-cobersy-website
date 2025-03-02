import styled from "styled-components";

// Wrapper for the entire content
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-self: center;
`;

const InputField = styled.input`
  height: 30px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  align-self: center;
  &:invalid {
    border: 1px solid red;
  }
  &:focus {
    border: 1px solid #ffe4e4;
    box-shadow: 0 0 5px rgba(255, 127, 127, 0.5);
  }
`;

const TextareaField = styled.textarea`
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 150px;
  resize: none;
  align-self: center;
  &:invalid {
    border: 1px solid red;
  }
  &:focus {
    border: 1px solid #ffe4e4;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  background-color: #ffe4e4;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative; /* Make sure the pseudo-element is positioned relative to the button */
  overflow: hidden; /* Hide anything outside the button */

  // Set up the fill color animation using the ::after pseudo-element
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%; /* Initially, width is 0% */
    height: 100%;
    background-color: #ff7f7f; /* The color to fill */
    transition: width 0.5s ease; /* Animate width */
    z-index: -1; /* Make sure the color fill is behind the text */
  }

  &:hover::after {
    width: 100%; /* On hover, expand the width to 100% */
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const FormItem = styled.div`
  :not(:first-child) {
    margin: 20px 0 0 0;
  }
`;

export { ContentWrapper, Title, FormWrapper, Label, InputField, TextareaField, SubmitButton, ErrorText, FormItem };
