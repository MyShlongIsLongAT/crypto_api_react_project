
import React from 'react';
import { CoinProvider } from '../components/coinContext';
import CoinList from '../components/coinList';

const Cryptocurrencies = () => {
	return (
		<>
			<CoinProvider>
				<CoinList />
			</CoinProvider>
		</>
	);

};

export default Cryptocurrencies;
