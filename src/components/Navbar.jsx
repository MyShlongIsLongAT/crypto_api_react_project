import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
	{ name: 'Homepage', link: '/' },
	{ name: 'Cryptocurrencies', link: '/cryptocurrencies' },
];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', sm: 'none' },
							}}
						>
							{pages.map((page) => (
								<Link
									to={page.link}
									key={page.name}
									style={{ textDecoration: 'none' }}
								>
									<MenuItem
										key={page.name}
										onClick={handleCloseNavMenu}
									>
										<Typography
											textAlign="center"
											sx={{ color: 'black' }}
										>
											{page.name}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.name}
								href={page.link}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.name}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Button
							variant="outlined"
							color="inherit"
							sx={{ mr: 2, minWidth: 90 }}
						>
							Sign In
						</Button>
						<Button
							variant="outlined"
							color="inherit"
							sx={{ minWidth: 90 }}
						>
							Sign Up
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
