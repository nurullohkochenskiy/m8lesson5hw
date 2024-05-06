import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Mainpage from "../pages/main";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
