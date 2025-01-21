import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
  padding-left: 8rem;
  padding-right: 8rem;
  box-sizing: border-box;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 150px;
  width: 100%;
  padding: 1rem;
  border-top: 1px solid #ffe4e4;
  border-bottom: 1px solid #ffe4e4;
  z-index: 999;
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
