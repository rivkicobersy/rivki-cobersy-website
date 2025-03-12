import { useEffect, useState } from "react";
import { NavBar, useNotifications } from "../common";
import { About, Contact, Footer, Home, Portfolio } from "./modules";
import { GlobalStyle, PageContainer, Section, StyledAlert } from "./styles";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const { inlineAlert } = useNotifications();
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let found = false;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        setActiveSection(section.id);
        found = true;
        break;
      }
    }

    if (!found) setActiveSection("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection === "") {
      window.history.pushState({}, "", "/");
    } else {
      window.history.pushState({}, "", `/${activeSection}`);
    }
  }, [activeSection]);

  return (
    <div>
      {inlineAlert && (
        <StyledAlert type={inlineAlert.type}>
          <strong>{inlineAlert.title}</strong>: {inlineAlert.message}
        </StyledAlert>
      )}
      <GlobalStyle />
      <NavBar
        navItems={[
          { name: "Home", path: "" },
          { name: "About", path: "about" },
          { name: "Portfolio", path: "portfolio" },
          { name: "Contact", path: "contact" },
        ]}
        activeSection={activeSection}
      />
      <PageContainer style={{ scrollBehavior: "smooth" }}>
        <Section id="">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default App;
