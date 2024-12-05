import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "200px" : "2rem")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: grey;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  padding-top: 20px;
  cursor: pointer;

  ${NavList} {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const HamburgerMenuContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

const HamburgerIcon = styled(IoMenu)`
  transition: transform 0.3s ease;
  font-size: 2rem;
  cursor: pointer;
`;

const NavItem = styled.li<{ selected: boolean }>`
  padding: 12px 20px;
  font-size: 18px;
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  background-color: ${(props) => (props.selected ? "#007bff" : "transparent")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LinkStyled = styled(Link)<{ selected: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  padding: 5px 10px;
  display: block;
`;

export { HamburgerIcon, HamburgerMenuContainer, LinkStyled, Nav, NavItem, NavList };
