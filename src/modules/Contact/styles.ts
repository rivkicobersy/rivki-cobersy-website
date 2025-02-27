import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffe4e4;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }

  label {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    padding: 10px;
    background-color: #ff7f7f;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff5555;
    }

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }

  p {
    margin-top: 20px;
    color: green;
  }

  p.error {
    color: red;
  }
`;

const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;
`;

export { ContentWrapper, SuccessMessage };
