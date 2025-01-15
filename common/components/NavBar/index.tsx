import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinkStyled, Nav, NavItem, NavList } from "./styles";

interface NavBarProps {
  navItems: { name: string; path: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.path === location.pathname);
    setSelectedIndex(currentIndex);
  }, [location, navItems]);

  const handleMenuItemClick = (index: number, path: string) => {
    setSelectedIndex(index);
    setIsNavOpen(false);
    navigate(path);
  };

  return (
    <Nav isOpen={isNavOpen}>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem selected={selectedIndex === index} key={index}>
            <LinkStyled
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(index, item.path);
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
