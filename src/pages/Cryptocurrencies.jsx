import React from "react";
import { CoinProvider } from "../components/coinContext";
import CoinList from "../components/coinList";
import styles from "./Cryptocurrencies.module.css"

const Cryptocurrencies = () => {
  return (
    <div className={styles.coinContent}>
      <>
        <CoinProvider>
          <CoinList />
        </CoinProvider>
      </>
    </div>
  );
};

export default Cryptocurrencies;
