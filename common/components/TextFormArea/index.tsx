import { FieldProps } from "formik";
import React from "react";
import styled from "styled-components";

interface TextFormAreaProps extends FieldProps {
  labelText: string;
  type?: string;
  backgroundColor?: string;
}

const Container = styled.div`
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.label<{ hasError: boolean }>`
  display: block;
  font-size: 14px;
  background: ${({ hasError }) => (hasError ? "red" : "#333")};
`;

const TextArea = styled.textarea<{ hasError: boolean; backgroundColor?: string }>`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  outline: none;
  height: 50px;
  resize: vertical;
  background: ${({ backgroundColor }) => backgroundColor || "#ffe4e4"};
  color: #c6605c;
  &::placeholder {
    color: ${({ hasError }) => (hasError ? "red" : "#c6605c")};
  }

  &:focus {
    border-color: #c6605c;
  }
`;

const TextFormArea: React.FC<TextFormAreaProps> = ({ field, form, labelText, backgroundColor, ...props }) => {
  const { touched, errors } = form;
  const errorText = touched[field.name] && errors[field.name];

  const errorMessage = typeof errorText === "string" ? errorText : undefined;

  return (
    <Container>
      <Label htmlFor={field.name} hasError={!!errorMessage}>
        {labelText}
      </Label>
      <TextArea
        {...field}
        {...props}
        id={field.name}
        name={field.name}
        hasError={!!errorMessage}
        backgroundColor={backgroundColor}
      />
    </Container>
  );
};

export default TextFormArea;
