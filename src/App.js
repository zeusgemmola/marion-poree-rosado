import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Convertissor from "./components/Convertissor/convertissor";
import Error from "./components/Error/error";
import Navbar from "./components/Navbar/navbar";

const App = () => (
  <div className="App">
    <header>
      <Navbar />
    </header>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Convertissor />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </main>
  </div>
);
export default App;
