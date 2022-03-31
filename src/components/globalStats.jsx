import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GlobalStatsCard } from '../components';
import { coinContext } from '../services/coinContext';
import { TailSpin } from 'react-loader-spinner';

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
		return (
			<>
				<Box
					sx={{
						mx: 'auto',
						width: '150px',
						marginTop: '40px',
					}}
				>
					<TailSpin color="#1976D2" height={150} width={150} />
				</Box>
			</>
		);
	}

	for (const val in stats) {
		widgets.push(
			<GlobalStatsCard title={val} value={stats[val]} key={val} />
		);
	}

	return (
		<>
			<Box
				sx={{
					width: '90vw',
					height: '100vw',
					mx: 'auto',

					backgroundColor: '#d9d9d9',
				}}
			>
				<Box
					sx={{
						mx: 'auto',
						width: '700px',
					}}
				>
					<Grid item xs={12}>
						<Typography>Global Stats</Typography>
					</Grid>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
					>
						{widgets}
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default GlobalStats;
