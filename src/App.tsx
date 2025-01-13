import { Routes, Route } from "react-router-dom";
import { PageContainer } from "./styles";
import { About, Header, Home } from "./modules";

const App = () => {
  return (
    <PageContainer>
      <Header />
      {/* <Navigation /> Add the Navigation */}
      {/* <Body> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* </Body> */}
      {/* <Footer /> Optionally add a footer */}
    </PageContainer>
  );
};

export default App;
