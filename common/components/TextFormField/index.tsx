import { FieldProps } from "formik";
import React from "react";
import styled from "styled-components";

interface TextFormFieldProps extends FieldProps {
  labelText: string;
  type?: string;
}

const Label = styled.label<{ hasError: boolean }>`
  display: block;
  font-size: 14px;
  color: ${({ hasError }) => (hasError ? "red" : "#333")};
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  border: 2px solid #ffe4e4;
  border-radius: 50px;
  outline: none;

  &:focus {
    border-color: #c6605c;
  }
`;

const TextFormField: React.FC<TextFormFieldProps> = ({ field, form, labelText, type = "text", ...props }) => {
  const { touched, errors } = form;
  const errorText = touched[field.name] && errors[field.name];

  const errorMessage = typeof errorText === "string" ? errorText : undefined;

  return (
    <div>
      <Label htmlFor={field.name} hasError={!!errorMessage}>
        {labelText}
      </Label>
      <Input {...field} {...props} id={field.name} name={field.name} type={type} />
    </div>
  );
};

export default TextFormField;
