import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationsProvider } from "../common/hooks/context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </Router>
);
