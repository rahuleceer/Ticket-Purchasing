import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home'
import Checkout from './pages/checkout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
    </>
  );
}

export default App;
