import React from "react";
import { useLocation } from "react-router-dom";
import CoinChart from "../components/cryptoDetailComponents/coinChart.js";
import NameBox from "../components/cryptoDetailComponents/nameBox.jsx";

const CryptoDetail = () => {
  const coin = useLocation();
  return (
    <div>
      <NameBox coinInfo={coin.state}/>
      <CoinChart coinStats={coin.state}/>
    </div>
  );
};

export default CryptoDetail;
