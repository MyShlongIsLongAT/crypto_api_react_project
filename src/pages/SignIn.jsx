import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserAuth } from '../services/authContext';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Alert } from '@mui/material';

export default function SignIn() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signIn, googleSignIn, user } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		const data = new FormData(event.currentTarget);
		try {
			setLoading(true);
			await signIn(data.get('email'), data.get('password'));
			sessionStorage.setItem('loggedIn', 'yes');
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
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					{error && <Alert severity="error">{error}</Alert>}
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
					<Button
						disabled={loading}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item xs>
							<Link href="/forgot-password" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							Don't have an account yet?{' '}
							<Link href="/signup" variant="body2">
								Sign Up
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
