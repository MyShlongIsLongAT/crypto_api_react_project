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

const FormDialog = (props) => {
	const [username, setUsername] = useState('');

	const handleSubmit = (event) => {
		props.handleClose();
		event.preventDefault();
		props.handle_Username_Reset(username);
	};

	const onInputChange = (event) => {
		setUsername(event.target.value);
	};

	return (
		<div>
			<Dialog fullWidth={true} open={props.open} onClose={props.handleClose}>
				<DialogTitle>Change Username</DialogTitle>

				<DialogContent>
					<DialogContentText>Type in your new username.</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						label="Username"
						type="name"
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

export default FormDialog;
