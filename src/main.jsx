import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Assets/css/global.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";

createRoot(document.getElementById("root")).render(<App />);
