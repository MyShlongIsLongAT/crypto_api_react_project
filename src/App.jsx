import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, CryptoDetail, ProtectedRoute } from './components';
import {
	Homepage,
	Cryptocurrencies,
	SignUp,
	Account,
	SignIn,
	ForgotPassword,
} from './pages';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import { CoinProvider } from './services/coinContext';
import { AuthContextProvider } from './services/authContext';
import { StorageContextProvider } from "./services/storageContext";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const light = {
	palette: {
		mode: 'light',
	},
};

const dark = {
	palette: {
		mode: 'dark',
	},
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const changeTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const searchHandler = (search) => {
		setSearchTerm(search);
	};

	//TODO User gets not logged out when closing tab

	return (
		<ThemeProvider
			theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
		>
			<CssBaseline />
			<AuthContextProvider>
			<StorageContextProvider>
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
									/>
									<Route exact path="/signup" element={<SignUp />} />
									<Route exact path="/signin" element={<SignIn />} />
									<Route
										exact
										path="/forgot-password"
										element={<ForgotPassword />}
									/>
									<Route
										exact
										path="/account"
										element={
											<ProtectedRoute>
												<Account></Account>
											</ProtectedRoute>
										}
									/>
								</Routes>
							</div>
						</CoinProvider>
					</div>
				</div>
				</StorageContextProvider>
			</AuthContextProvider>
		</ThemeProvider>
	);
};

export default App;
