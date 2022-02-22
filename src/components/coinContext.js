import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const coinContext = createContext([]);

export const CoinProvider = ({ children }) => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		const data = await axios.get(
			'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins',
			{
				headers: {
					'x-access-token': process.env.API_KEY,
					'Content-Type': 'application / json',
				},
			}
		);

		console.log(data);
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
