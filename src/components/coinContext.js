import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const coinContext = createContext([]);

export const CoinProvider = ({ children }) => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await axios.get("https://coinranking1.p.rapidapi.com/coins", {
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    setCoins(...[data.data.data.coins]);
    setLoading(false);
  };

	useEffect(() => {
		if (coins && !coins.length) {
			setLoading(true);
		}
		fetchData();
	}, [loading]);

	return (
		<coinContext.Provider value={{ coins }}>{children}</coinContext.Provider>
	);
};