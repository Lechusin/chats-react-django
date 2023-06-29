import React from 'react';
import { Home } from "../pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { GeneralProvider } from "../context";

function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home/:user" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </GeneralProvider>
    </BrowserRouter>
  );

}

export default App;
