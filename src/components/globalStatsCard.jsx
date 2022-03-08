import React from 'react';
import millify from 'millify';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const GlobalStatsCard = (props) => {
	const value = millify(props.value, {
		precision: 2,
		decimalSeparator: ',',
		space: true,
	});

	return (
		<>
			<Grid item xs={3} sm={4} md={4} key={props.title}>
				<Card sx={{ minWidth: 100, maxWidth: 200 }}>
					<CardContent>
						<Typography>{props.title}</Typography>
						<Typography>{value}</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	);
};

export default GlobalStatsCard;
