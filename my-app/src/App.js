import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EditPersonalInfo from "./pages/EditPersonalInfo";

function App() {
  return (
    <BrowserRouter>
      <Template>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="edit" element={<EditPersonalInfo />} />
          </Routes>

      </Template>
    </BrowserRouter>
  );
}

export default App;
