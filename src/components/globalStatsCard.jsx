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
		<Grid item key={props.title}>
			<Card>
				<CardContent>
					<Typography>{props.title}</Typography>
					<Typography>{value}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default GlobalStatsCard;
