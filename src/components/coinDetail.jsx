import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { coinContext } from '../services/coinContext';

const CoinDetail = (props) => {
	
	let {id} = useParams();

	return <div>{id}</div>;
};

export default CoinDetail;
