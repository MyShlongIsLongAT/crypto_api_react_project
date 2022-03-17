import React from 'react';
import { useLocation } from 'react-router-dom';

const CryptoDetail = () => {
	const coin = useLocation();
	console.log(coin);
	return <img src={coin.state.iconUrl}></img>;
};

export default CryptoDetail;
