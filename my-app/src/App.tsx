import React from "react";
import Container from "@mui/material/Container";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";
import { Home, SignUp, AllUsers, LogIn } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allusers" element={<AllUsers />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
