import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

const EmailDialog = (props) => {
	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		props.handleClose();
		event.preventDefault();
		props.handle_Email_Reset(email);
	};

	const onInputChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div>
			<Dialog fullWidth={true} open={props.open} onClose={props.handleClose}>
				<DialogTitle>Change Email</DialogTitle>

				<DialogContent>
					<DialogContentText>Type in your new Email.</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="email"
						label="Email"
						type="email"
						fullWidth
						variant="standard"
						onChange={onInputChange}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default EmailDialog;
