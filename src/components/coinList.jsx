import React, { useContext, useState, useEffect } from 'react';
import CoinContainer from './coinContainer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { coinContext } from '../services/coinContext';
import { Link } from 'react-router-dom';

const CoinList = () => {
	const data = useContext(coinContext);

	const [matches, setMatches] = useState(
		window.matchMedia('(max-width: 1046px)').matches
	);

	const remove_Link_Decoration = {
		textDecoration: 'none',
		color: 'black',
	};

	const Card = () => {
		return data.coins.map((coin, index) => {
			return (
				<Grid item xs={3} sm={4} md={4} key={index}>
					<Link
						to={'/crypto/' + coin.uuid}
						style={remove_Link_Decoration}
						state={coin}
					>
						<CoinContainer
							price={coin.price}
							iconUrl={coin.iconUrl}
							symbol={coin.symbol}
						/>
					</Link>
				</Grid>
			);
		});
	};

	useEffect(() => {
		window
			.matchMedia('(max-width: 1046px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);

	return (
		<div>
			{matches && (
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
					>
						{Card()}
					</Grid>
				</Box>
			)}
			{!matches && (
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
					>
						{Card()}
					</Grid>
				</Box>
			)}
		</div>
	);
};

export default CoinList;
