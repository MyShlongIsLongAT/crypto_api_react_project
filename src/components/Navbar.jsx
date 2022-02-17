import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Box,
	Container,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<HomeIcon />
						</IconButton>
						<Button
							href="/"
							varient="text"
							color="inherit"
							sx={{ mr: 2 }}
						>
							Homepage
						</Button>
						<Button
							href="/cryptocurrencies"
							varient="text"
							color="inherit"
						>
							Cryptocurrencies
						</Button>
						<Container sx={{ flexGrow: 1 }}></Container>
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