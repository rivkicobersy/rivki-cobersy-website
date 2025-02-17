import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerButton, HeaderWrapper, LinkStyled, Logo, Nav, NavItem, NavList, PageContainer } from "./styles";

interface NavBarProps {
  navItems: { name: string; path: string }[];
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, activeSection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      console.log(section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      navigate(`/${path}`);
    }
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageContainer isSticky={isSticky}>
      <HeaderWrapper>{showLogo && <Logo src="/logo.png" alt="Website Logo" />}</HeaderWrapper>
      <Nav isSticky={isSticky}>
        <HamburgerButton onClick={toggleMobileMenu}>
          <div />
          <div />
          <div />
        </HamburgerButton>
        <NavList isMobileMenuOpen={isMobileMenuOpen}>
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
