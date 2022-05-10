import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UserAuth } from '../services/authContext';
import { Alert, CssBaseline } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function ForgotPassword() {
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const { resetPassword } = UserAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		setMessage('');
		const data = new FormData(event.currentTarget);
		try {
			setLoading(true);
			await resetPassword(data.get('email'));
			setMessage('Check your inbox for further instructions ');
		} catch (e) {
			setError(e.message);
			console.log(error);
		}
		setLoading(false);
	};

	const checkIfEmailSent = () => {
		if (message === '') {
			return (
				<>
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

					<Button
						disabled={loading}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Reset Password
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/signin" variant="body2">
								Sign In
							</Link>
						</Grid>
					</Grid>
				</>
			);
		} else {
			return (
				<>
					<Link
						href="/signin"
						style={{ textDecoration: 'none' }}
						key={uuidv4()}
						variant="body2"
					>
						<Button
							disabled={loading}
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, color: 'white' }}
						>
							Go to Sign In
						</Button>
					</Link>
				</>
			);
		}
	};

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
					Reset Password
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					{error && <Alert severity="error">{error}</Alert>}
					{message && <Alert severity="info">{message}</Alert>}
					{checkIfEmailSent()}
				</Box>
			</Box>
		</Container>
	);
}
