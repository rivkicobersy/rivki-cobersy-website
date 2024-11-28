import { Link } from "react-router-dom";
import styled from "styled-components";


const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

 const Nav = styled.nav`
  height: 100%;
  width: 2rem; /* Initially narrow */
  position: fixed;
  top: 0;
  left: 0;
  background-color: grey;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease; 
  padding-top: 20px;
  
  &:hover {
    width: 200px;  /* Expand on hover */
  }

  /* Show NavList when expanded */
  &:hover ${NavList} {
    display: block;
  }

  /* Initially hide NavList when collapsed */
  ${NavList} {
    display: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;


 const HamburgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  /* Only show when collapsed */
  ${Nav}:not(:hover) & {
    display: block;
  }

  /* Hide when expanded */
  ${Nav}:hover & {
    display: none;
  }
`;

 const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

 const BrandLogo = styled.img`
  width: 60px;
  height: 60px;
`;

 const BrandName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
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
export {
  Nav, NavItem, NavList, BrandContainer, BrandLogo, BrandName,
  HamburgerMenuContainer, LinkStyled
}