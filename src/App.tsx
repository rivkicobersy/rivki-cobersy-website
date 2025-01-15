import { Routes, Route } from "react-router-dom";
import { PageContainer } from "./styles";
import { About, Header, Home } from "./modules";

import { NavBar } from "../common";

const App = () => {
  return (
    <PageContainer>
      <Header />
      <NavBar
        navItems={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Protfolio", path: "/portfolio" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> Optionally add a footer */}
    </PageContainer>
  );
};

export default App;
