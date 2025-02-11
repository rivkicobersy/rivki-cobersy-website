import styled from "styled-components";

const PageContainer = styled.div<{ isSticky: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
  padding-top: ${({ isSticky }) => (isSticky ? "100px" : "0")};

  @media (max-width: 768px) {
    padding-top: ${({ isSticky }) => (isSticky ? "66px" : "0")};
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background-color: white;
  position: relative;
`;

const Nav = styled.nav<{ isSticky: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  top: ${({ isSticky }) => (isSticky ? "0" : "initial")};
  width: 100%;
  border-top: 1px solid #ffe4e4;
  border-bottom: 1px solid #ffe4e4;
  box-shadow: ${({ isSticky }) => (isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};
  transition: box-shadow 0.3s ease;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  div {
    width: 30px;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavList = styled.ul<{ isMobileMenuOpen: boolean }>`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: white;
    gap: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    top: 100%;
    position: absolute;
    max-height: calc(100vh - 50px);
    z-index: 10;
    overflow: none;
  }
`;

const NavItem = styled.li<{ selected: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? "#C6605C" : "#333")};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem;

  &:hover {
    color: #c6605c;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem;
  }
`;

const LinkStyled = styled.a<{ selected: boolean }>`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;

  &:hover {
    color: #c6605c;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  cursor: pointer;
  @media (max-width: 270px) {
    height: 50px;
  }
`;

export { LinkStyled, Nav, NavItem, NavList, Logo, PageContainer, HeaderWrapper, HamburgerButton };
