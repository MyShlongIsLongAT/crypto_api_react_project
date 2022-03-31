import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage, Cryptocurrencies } from "./pages";
import "./App.css";
import { CoinProvider } from "./services/coinContext";
import CoinDetail from "./components/coinDetail";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <CoinProvider>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                exact
                path="/cryptocurrencies/:uuid"
                element={<CoinDetail />}
              />
            </Routes>
          </div>
        </CoinProvider>
      </div>
    </div>
  );
};

export default App;
