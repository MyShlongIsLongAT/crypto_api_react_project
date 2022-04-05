import React from 'react';
import millify from 'millify';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './globalStats.module.css';

const GlobalStatsCard = (props) => {
	const value = millify(props.value, {
		precision: 2,
		decimalSeparator: ',',
		space: true,
	});

	return (
		<div className={styles.globalStats}>
			<Card>
				<CardContent>
					<Typography sx={{ fontWeight: 'bold' }}>
						{props.title}
					</Typography>
					<Typography>{value}</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default GlobalStatsCard;
