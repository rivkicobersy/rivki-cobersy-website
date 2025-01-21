import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
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
  background-color: white;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  top: ${({ isSticky }) => (isSticky ? "0" : "initial")};
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #ffe4e4;
  border-bottom: 1px solid #ffe4e4;
  z-index: 999;
  transition: top 0.3s ease-in-out;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled.li<{ selected: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? "#C6605C" : "#333")};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #c6605c;
    transform: scale(1.1);
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
`;

export { LinkStyled, Nav, NavItem, NavList, Logo, PageContainer, HeaderWrapper };
