import React, { useContext } from "react";
import { coinContext } from "./coinContext";

/* const getCoins = (coins) => {
    let allCoins = [];
    coins.data.coins.forEach((element) => {
        allCoins.push(element);
    });
    return allCoins;
} */

const CoinList = () => {
  const data = useContext(coinContext);
  return <div>{console.log(data.coins)}</div>;
};

export default CoinList;
