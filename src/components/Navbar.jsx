import React from 'react';
import { Link } from 'react-router-dom';
import {
	CssBaseline,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
	return (
		<>
			<CssBaseline />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 3 }}
						>
							<HomeIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ mr: 3 }}>
							Homepage
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Cryptocurrencies
						</Typography>
						<Button variant="outlined" color="inherit" sx={{ mr: 2 }}>
							Login
						</Button>
						<Button variant="outlined" color="inherit">
							Sign Up
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
