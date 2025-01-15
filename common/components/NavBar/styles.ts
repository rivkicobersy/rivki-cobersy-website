import styled from "styled-components";

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: sticky;
  padding: 1rem;
  border-top: 1px solid #b3b1b1;
  border-bottom: 1px solid #b3b1b1;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  gap: 2rem;
`;

const NavItem = styled.li<{ selected: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ selected }) => (selected ? "#FEBADD" : "#333")};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #febadd;
    transform: scale(1.1);
  }
`;

const LinkStyled = styled.a<{ selected: boolean }>`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;

  &:hover {
    color: #febadd;
  }
`;

export { LinkStyled, Nav, NavItem, NavList };
