import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { NavBar } from "../common";

ReactDOM.render(
  <Router>
    <NavBar
      navItems={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]}
    />
    <App />
  </Router>,
  document.getElementById("root")
);
