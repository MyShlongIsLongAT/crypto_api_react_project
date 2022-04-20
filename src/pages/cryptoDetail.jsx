import React from "react";
import { useLocation } from "react-router-dom";
import CoinChart from "../components/cryptoDetailComponents/coinChart.js";
import NameBox from "../components/cryptoDetailComponents/nameBox.jsx";
import styles from './cryptoDetail.module.css';

const CryptoDetail = () => {
  const coin = useLocation();
  return (
    <div className={styles.cryptoInfo}>
      <NameBox coinInfo={coin.state}/>
      <CoinChart coinStats={coin.state}/>
    </div>
  );
};

export default CryptoDetail;
