import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotificationsProvider } from "../common/hooks/context";
import App from "./App";
import ErrorPage from "./modules/404";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    <NotificationsProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </NotificationsProvider>
  </Router>
);
