import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const coinContext = createContext([]);

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins",
      {
        headers: {
          "x-access-token": process.env.API_KEY,
        },
      }
    );
    setCoins(...[data.data.data.coins]);
    setLoading(false);
  };

  useEffect(async () => {
    if (coins && !coins.length) {
      setLoading(true);
    }
    await fetchData();
  }, [loading]);

  return (
    <coinContext.Provider value={{coins}}>
      {children}
    </coinContext.Provider>
  );
};
