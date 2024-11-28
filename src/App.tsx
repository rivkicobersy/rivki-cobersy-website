import { Routes, Route } from "react-router-dom";
import { PageContainer } from "./styles";

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

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
