import React from 'react';
import "./index.css"
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = document.getElementById("root");
if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
