import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-top: 20px;
  margin-right: 20px;
`;

const Text = styled.p`
  float: none;
  line-height: 1.5;
`;

export { Image, ImageWrapper, Text };
