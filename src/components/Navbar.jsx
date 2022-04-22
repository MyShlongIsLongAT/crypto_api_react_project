import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
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
import Logo from './logoReact.svg';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { v4 as uuidv4 } from 'uuid';

const pages = [
	{ name: 'Homepage', link: '/' },
	{ name: 'Cryptocurrencies', link: '/cryptocurrencies' },
];

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	width: 'auto',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,

	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
	[theme.breakpoints.up('md')]: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(2),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const ResponsiveAppBar = ({ searchHandler }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const getSearch = () => {
		if (location.pathname === '/cryptocurrencies') {
			return (
				<Box sx={{ flexGrow: 0 }}>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							onChange={(event) => {
								searchHandler(event.target.value);
							}}
						/>
					</Search>
				</Box>
			);
		} else {
			return <></>;
		}
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
						<img src={Logo} width="45px" alt="" />
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
						<img src={Logo} width="45px" alt="" />
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
					{getSearch()}

					<Box sx={{ flexGrow: 0 }}>
						<Link
							to="/signin"
							key={uuidv4()}
							style={{ textDecoration: 'none' }}
						>
							<Button
								variant="outlined"
								color="inherit"
								sx={{ mr: 2, minWidth: 90, color: 'white' }}
							>
								Sign In
							</Button>
						</Link>
						<Link
							to="/signup"
							key={uuidv4()}
							style={{ textDecoration: 'none' }}
						>
							<Button
								variant="contained"
								color="inherit"
								sx={{
									'&:hover': {
										color: 'white',
										backgroundColor: '#0a02a6',
									},
									minWidth: 90,
									color: 'white',
									backgroundColor: '#05014f',
								}}
							>
								Sign Up
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
