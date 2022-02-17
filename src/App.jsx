import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage, Cryptocurrencies } from "./pages";
import "./App.css";
import CoinList from "./components/coinList";
import { CoinProvider } from "./components/coinContext";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
          </Routes>
        </div>
      </div>
      <CoinProvider>
        <CoinList />
      </CoinProvider>
    </div>
  );
};

export default App;
