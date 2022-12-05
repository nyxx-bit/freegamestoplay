import React from "react";
import Home from "./components/pages/Home";
import PC from "./components/pages/PC";
import Browser from "./components/pages/Browser";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const token = localStorage.getItem("authenticated");

  console.log(token);

  if (!token) {
    return <Login />;
  } else {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pc" element={<PC />} />
          <Route path="/browser" element={<Browser />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
};

export default App;
