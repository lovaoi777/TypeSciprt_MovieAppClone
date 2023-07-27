import './App.css';
import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from './pages/DetailPage/Detail';
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";

function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
