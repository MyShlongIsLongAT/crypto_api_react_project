import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GlobalStatsCard as Card } from '../components';
import { coinContext } from '../services/coinContext';

const GlobalStats = () => {
	const data = useContext(coinContext);
	let widgets = [];

	{
		/* data.stats.forEach((value) => {
			widgets.push(
				<Card
					total={value.total}
					totalCoins={value.totalCoins}
					totalMarkets={value.totalMarkets}
					totalExchanges={value.totalExchanges}
					totalMarketCap={value.totalMarketCap}
					total24hVolume={value.total24hVolume}
				/>
			);
		}); */
	}

	return (
		<>
			<Box spacing={2} sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={2}
					justifyContent="center"
					alignItems="center"
				></Grid>
			</Box>
		</>
	);
};

export default GlobalStats;
