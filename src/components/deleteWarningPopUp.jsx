import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import React from 'react';

const deleteWarningPopUp = (props) => {
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{'Delete your Account'}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Are you sure you want to delete this account?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} autoFocus>
					Back
				</Button>
				<Button color="error" onClick={props.handleDelete}>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default deleteWarningPopUp;
