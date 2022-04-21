import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, CryptoDetail } from './components';
import { Homepage, Cryptocurrencies } from './pages';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import { CoinProvider } from './services/coinContext';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const searchHandler = (search) => {
		setSearchTerm(search);
	};

	return (
		<div className="app">
			<div className="navbar">
				<Navbar searchHandler={searchHandler} />
			</div>
			<div className="main">
				<CoinProvider>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies search={searchTerm} />}
							/>
							<Route
								path="/cryptocurrencies/:id"
								element={<CryptoDetail />}
							></Route>
						</Routes>
					</div>
				</CoinProvider>
			</div>
		</div>
	);
};

export default App;
