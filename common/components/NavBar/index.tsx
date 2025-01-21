import React, { useState, useEffect } from "react";
import { HeaderWrapper, LinkStyled, Logo, Nav, NavItem, NavList, PageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  navItems: { name: string; path: string }[];
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, activeSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
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

  const handleScroll = () => {
    const navbarHeight = 155;
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition >= navbarHeight) {
      setIsSticky(true);
      setShowLogo(false);
    } else {
      setIsSticky(false);
      setShowLogo(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageContainer>
      <HeaderWrapper>{showLogo && <Logo src="/logo.png" alt="Website Logo" onClick={scrollToHome} />}</HeaderWrapper>
      <Nav isSticky={isSticky}>
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
