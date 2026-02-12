import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { StrictMode } from 'react';
import "./index.css"

const container = document.getElementById("root");
const root = createRoot(container);

const element = <StrictMode>
  <App />
</StrictMode>

root.render(element)