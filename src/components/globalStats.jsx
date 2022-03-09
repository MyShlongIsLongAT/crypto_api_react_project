import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GlobalStatsCard } from '../components';
import { coinContext } from '../services/coinContext';

const GlobalStats = () => {
	const data = useContext(coinContext);
	delete data.stats.total;

	const stats = {
		'Total Cryptocurrencies': data.stats.totalCoins,
		'Total Markets': data.stats.totalMarkets,
		'Total Exchanges': data.stats.totalExchanges,
		'Total Market Cap': data.stats.totalMarketCap,
		'Total 24h Volume': data.stats.total24hVolume,
	};

	console.log(stats);

	let widgets = [];

	if (!stats['Total Cryptocurrencies']) {
		return <div>Fetching...</div>;
	}

	for (const val in stats) {
		widgets.push(
			<GlobalStatsCard title={val} value={stats[val]} key={val} />
		);
	}

	return (
		<>
			<Box sx={{ backgroundColor: 'green', marginTop: '24px' }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
				>
					{widgets}
				</Grid>
			</Box>
		</>
	);
};

export default GlobalStats;
