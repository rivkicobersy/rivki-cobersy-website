import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon, HamburgerMenuContainer, LinkStyled, Nav, NavItem, NavList } from "./styles";

interface NavBarProps {
  navItems: { name: string; path: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (index: number, path: string) => {
    setSelectedIndex(index);
    setIsNavOpen(false); // Close the nav immediately after a click
    navigate(path);
  };

  return (
    <Nav isOpen={isNavOpen}>
      <HamburgerMenuContainer>
        <HamburgerIcon onClick={handleNavToggle} />
      </HamburgerMenuContainer>

      <NavList>
        {navItems.map((item, index) => (
          <NavItem selected={selectedIndex === index} key={index}>
            <LinkStyled
              to={item.path}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleMenuItemClick(index, item.path); // Custom navigation
              }}
              selected={selectedIndex === index}
            >
              {item.name}
            </LinkStyled>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default NavBar;
