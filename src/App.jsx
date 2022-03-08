import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, CryptoDetail } from './components';
import { Homepage, Cryptocurrencies } from './pages';
import './App.css';
import { CoinProvider } from './services/coinContext';

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<CoinProvider>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>
							<Route
								path="/cryptocurrencies/:id"
								component={CryptoDetail}
							></Route>
						</Routes>
					</div>
				</CoinProvider>
			</div>
		</div>
	);
};

export default App;
