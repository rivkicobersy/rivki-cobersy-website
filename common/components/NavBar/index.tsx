import React from "react";
import { HeaderWrapper, LinkStyled, Logo, Nav, NavItem, NavList, PageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  navItems: { name: string; path: string }[];
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, activeSection }) => {
  const navigate = useNavigate();

  const scrollToHome = () => {
    window.history.pushState({}, "", "/");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleMenuItemClick = (path: string) => {
    if (path === "") {
      scrollToHome();
    } else {
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      navigate(`/${path}`);
    }
  };

  return (
    <PageContainer>
      <HeaderWrapper>
        <Logo src="/logo.png" alt="Website Logo" onClick={scrollToHome} />
      </HeaderWrapper>
      <Nav>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.path} selected={activeSection === item.path}>
              <LinkStyled
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item.path);
                }}
                selected={activeSection === item.path}
              >
                {item.name}
              </LinkStyled>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </PageContainer>
  );
};

export default NavBar;
