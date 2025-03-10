import { FieldProps } from "formik";
import React from "react";
import styled from "styled-components";

interface TextFormFieldProps extends FieldProps {
  labelText: string;
  type?: string;
  backgroundColor?: string;
}

const Container = styled.div`
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
`;

const Label = styled.label<{ hasError: boolean }>`
  display: block;
  font-size: 14px;
  background: ${({ hasError }) => (hasError ? "red" : "#333")};
`;

const Input = styled.input<{ hasError: boolean; backgroundColor?: string }>`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  outline: none;
  height: 2rem;
  color: #c6605c;
  background: ${({ backgroundColor }) => backgroundColor || "#ccc"};

  &::placeholder {
    color: ${({ hasError }) => (hasError ? "red" : "#c6605c")};
  }

  &:focus {
    border-color: #c6605c;
  }
`;

const TextFormField: React.FC<TextFormFieldProps> = ({
  field,
  form,
  labelText,
  type = "text",
  backgroundColor,
  ...props
}) => {
  const { touched, errors } = form;
  const errorText = touched[field.name] && errors[field.name];

  const errorMessage = typeof errorText === "string" ? errorText : undefined;

  return (
    <Container>
      <Label htmlFor={field.name} hasError={!!errorMessage}>
        {labelText}
      </Label>
      <Input
        {...field}
        {...props}
        id={field.name}
        name={field.name}
        type={type}
        hasError={!!errorMessage}
        backgroundColor={backgroundColor}
      />
    </Container>
  );
};

export default TextFormField;
