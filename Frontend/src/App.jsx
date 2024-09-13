import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home className="overflow-hidden"/>} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
