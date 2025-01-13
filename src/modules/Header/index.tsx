import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="/logo.jpeg" alt="Rivki's Website" />
    </HeaderWrapper>
  );
};

export default Header;

// Styled Components

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const Logo = styled.img`
  max-height: 80%;
  width: auto;
`;
