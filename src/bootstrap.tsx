import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from './providers';

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container);

root.render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
