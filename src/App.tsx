import { Routes, Route } from "react-router-dom";
import { PageContainer } from "./styles";
import { About, Home } from "./modules";

const App = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </PageContainer>
  );
};

export default App;
