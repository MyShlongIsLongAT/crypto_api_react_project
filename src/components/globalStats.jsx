import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GlobalStatsCard } from '../components';
import { coinContext } from '../services/coinContext';

const GlobalStats = () => {
	const data = useContext(coinContext);
	let widgets = [];

	for (const val in data.stats) {
		widgets.push(
			<GlobalStatsCard title={val} value={data.stats[val]} key={val} />
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
