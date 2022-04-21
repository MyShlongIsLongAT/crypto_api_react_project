import React from 'react';
import CoinList from '../components/coinList';
import styles from './Cryptocurrencies.module.css';

const Cryptocurrencies = ({ search }) => {
	return (
		<div className={styles.coinContent}>
			<CoinList search={search} />
		</div>
	);
};

export default Cryptocurrencies;
