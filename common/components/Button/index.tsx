import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => (size === "small" ? "0.5rem 1rem" : size === "large" ? "1rem 2rem" : "0.75rem 1.5rem")};
  font-size: ${({ size }) => (size === "small" ? "12px" : size === "large" ? "16px" : "14px")};
  border-radius: 50px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, transform 0.2s ease;
  background-color: ${({ variant }) =>
    variant === "primary"
      ? "#d17c74"
      : variant === "secondary"
      ? "#f8b0b0"
      : variant === "danger"
      ? "#e14d47"
      : "#5f9fcf"};
  color: white;
  display: block;
  margin: 0 auto;

  &:disabled {
    background-color: #fbe3e3;
    color: #a0a0a0;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary"
        ? "#c6605c"
        : variant === "secondary"
        ? "#ffe4e4"
        : variant === "danger"
        ? "#dc3545"
        : "#007bff"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
  children,
}) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
