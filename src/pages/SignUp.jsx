import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserAuth } from '../services/authContext';
import GoogleButton from 'react-google-button';

const theme = createTheme();

export default function SignUp() {
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const { createUser, googleSignIn } = UserAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		setError('');
		try {
			await createUser(data.get('email'), data.get('password'));
			sessionStorage.setItem('loggedIn', 'yes');
			navigate('/account');
		} catch (e) {
			setError(e.message);
			console.log(error);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error.message);
		}
	};

	React.useEffect(() => {
		if (sessionStorage.getItem('loggedIn') !== null) {
			navigate('/account');
		}
	}, [sessionStorage.getItem('loggedIn')]);

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
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
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
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
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>

						<Grid container justifyContent="flex-end">
							<Grid item>
								Already have an account?{' '}
								<Link href="/signin" variant="body2">
									Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
					<Box sx={{ marginTop: 3 }}>
						<GoogleButton onClick={handleGoogleSignIn} />
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
