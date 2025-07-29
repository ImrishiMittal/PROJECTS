import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
