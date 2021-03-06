import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { UserAuth } from '../services/authContext';
import { Avatar, Tooltip } from '@mui/material';

const pages = [
	{ name: 'Homepage', link: '/' },
	{ name: 'Cryptocurrencies', link: '/cryptocurrencies' },
];

const settings = [{ name: 'Account', link: '/account' }];

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
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const navigate = useNavigate();
	const location = useLocation();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
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
							placeholder="Search???"
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

	const GetUserWidget = () => {
		const { user, logout } = UserAuth();

		const handleLogout = async () => {
			try {
				await logout();
				if (location.pathname === '/account') {
					navigate('/');
				}
			} catch (e) {
				console.log(e.message);
			}
		};

		if (localStorage.getItem('loggedIn')) {
			return (
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar
								alt="Remy Sharp"
								src={
									user?.photoURL ? user.photoURL : '/static/images/avatar/1.jpg'
								}
							/>
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map((setting) => (
							<Link
								to={setting.link}
								key={setting.name}
								style={{ textDecoration: 'none' }}
							>
								<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
									<Typography textAlign="center" sx={{ color: 'black' }}>
										{setting.name}
									</Typography>
								</MenuItem>
							</Link>
						))}
						<MenuItem
							key="Logout"
							onClick={() => {
								handleLogout();
								handleCloseUserMenu();
							}}
						>
							<Typography textAlign="center">Logout</Typography>
						</MenuItem>
					</Menu>
				</Box>
			);
		}
		return (
			<Box sx={{ flexGrow: 0 }}>
				<Link to="/signin" key={uuidv4()} style={{ textDecoration: 'none' }}>
					<Button
						variant="outlined"
						color="inherit"
						sx={{ mr: 2, minWidth: 90, color: 'white' }}
					>
						Sign In
					</Button>
				</Link>
				<Link to="/signup" key={uuidv4()} style={{ textDecoration: 'none' }}>
					<Button
						variant="outlined"
						color="inherit"
						sx={{
							minWidth: 90,
							color: 'white',
						}}
					>
						Sign Up
					</Button>
				</Link>
			</Box>
		);
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
									<MenuItem key={page.name} onClick={handleCloseNavMenu}>
										<Typography textAlign="center" sx={{ color: 'black' }}>
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
							<Link
								to={page.link}
								key={page.name}
								style={{ textDecoration: 'none' }}
							>
								<Button
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page.name}
								</Button>
							</Link>
						))}
					</Box>
					{getSearch()}
					{GetUserWidget()}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
