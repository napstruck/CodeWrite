import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route from react-router-dom
import CodeHome from "./components/CodeHome.jsx";
import NavPage from "./components/NavPage.jsx";
import FrameWork from "./components/FrameWork.jsx";
import DescriptionSection from "./components/Description.jsx";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/CodeHome" element={<CodeHome />} />
      <Route path="/NavPage" element={<NavPage />} />
      <Route path="/FrameWork" element={<FrameWork />} />
      <Route path="/Description" element={<DescriptionSection />} />
    </Routes>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));

export default router;
