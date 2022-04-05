import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { GlobalStatsCard } from '../components';
import { coinContext } from '../services/coinContext';
import { TailSpin } from 'react-loader-spinner';
import styles from './globalStats.module.css';

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
			<div className={styles.heading}>
				<Typography variant="h3">Global Stats</Typography>
			</div>
			<div className={styles.flexBox}>{widgets}</div>
		</>
	);
};

export default GlobalStats;
