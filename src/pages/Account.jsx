import { Button, Typography } from '@mui/material';
import React from 'react';
import { UserAuth } from '../services/authContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<Typography variant="h2">Account</Typography>
			<Typography variant="inherit">
				User Email: {user && user.email}
			</Typography>
			<Button onClick={handleLogout} variant="primary">
				Logout
			</Button>
		</>
	);
};

export default Account;
