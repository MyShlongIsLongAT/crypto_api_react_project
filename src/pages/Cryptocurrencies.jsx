import React from "react";
import CoinList from "../components/coinList";
import styles from "./Cryptocurrencies.module.css";

const Cryptocurrencies = () => {
  return (
    <div className={styles.coinContent}>
      <CoinList />
    </div>
  );
};

export default Cryptocurrencies;
