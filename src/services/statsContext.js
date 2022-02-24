import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const statsContext = createContext([]);

export const StatsProvider = ({ children }) => {
	const [stats, setStats] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		const data = await axios.get(
			'https://coinranking1.p.rapidapi.com/coins',
			{
				headers: {
					'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_API_KEY,
				},
			}
		);
		setStats(...[data.data.data.stats]);
		if (stats && !stats.length) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	};

	useEffect(() => {
		fetchData();
	}, [loading]);

	return (
		<statsContext.Provider value={{ stats }}>
			{children}
		</statsContext.Provider>
	);
};
