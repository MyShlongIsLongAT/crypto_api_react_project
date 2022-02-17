import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components";
import CoinList from "./components/coinList";

const App = () => {
  return (
    <div>
      <Navbar />
      <CoinList/>
    </div>
  );
};

export default App;
