import React, { useState } from "react";

import { LinkStyled, Nav, NavItem, NavList } from "./styles";

interface NavItem {
  name: string;
  path: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Nav>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem selected={selectedIndex === index} key={index}>
            <LinkStyled
              to={item.path}
              onClick={() => setSelectedIndex(index)}
              style={{ fontWeight: selectedIndex === index ? "bold" : "normal" }}
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
