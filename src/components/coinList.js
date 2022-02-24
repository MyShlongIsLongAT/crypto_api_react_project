import React, { useContext } from 'react';
import CoinContainer from './coinContainer';
import { coinContext } from './coinContext';

const CoinList = () => {
	const data = useContext(coinContext);
	let widgets = [];

	data.coins.forEach((coin) => {
		widgets.push(
			<CoinContainer
				name={coin.name}
				price={coin.price}
				iconUrl={coin.iconUrl}
				symbol={coin.symbol}
			/>
		);
	});
	return widgets;
};

export default CoinList;
