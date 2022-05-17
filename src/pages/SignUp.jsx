import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserAuth } from '../services/authContext';
import GoogleButton from 'react-google-button';
import { Alert } from '@mui/material';

export default function SignUp() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { createUser, googleSignIn, user } = UserAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		setError('');
		try {
			setLoading(true);
			await createUser(
				data.get('email'),
				data.get('password'),
				data.get('username')
			);
			sessionStorage.setItem('loggedIn', 'yes');
			navigate('/account');
		} catch (e) {
			setError(e.message);
			console.log(error);
		}
		setLoading(false);
	};

	const handleGoogleSignIn = async () => {
		try {
			setLoading(true);
			await googleSignIn();
		} catch (e) {
			setError(e.message);
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (user) {
			sessionStorage.setItem('loggedIn', 'yes');
			navigate('/account');
		}
	}, [user]);

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					{error && <Alert severity="error">{error}</Alert>}
					<Grid container spacing={2} marginTop={'3px'}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>

					<Button
						disabled={loading}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>

					<Grid container justifyContent="center">
						<Grid item>
							Already have an account?{' '}
							<Link href="/signin" variant="body2">
								Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ marginTop: 3 }}>
					<GoogleButton disabled={loading} onClick={handleGoogleSignIn} />
				</Box>
			</Box>
		</Container>
	);
}
