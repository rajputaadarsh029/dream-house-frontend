// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home.jsx";
import Editor from "./pages/Editor.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Signup from "./pages/Signup.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/editor" element={<Editor />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/signup" element={<Signup />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
);
