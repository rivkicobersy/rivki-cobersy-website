import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    {/* <NavBar
      navItems={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Protfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
      ]}
    /> */}

    <App />
  </Router>,
  document.getElementById("root")
);
