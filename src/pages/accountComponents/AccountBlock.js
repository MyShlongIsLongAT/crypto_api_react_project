import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { AiOutlineEdit } from 'react-icons/ai';
import { UserAuth } from '../../services/authContext';
import { StorageAuth } from '../../services/storageContext';
import { useNavigate } from 'react-router-dom';
import styles from './AccountBlock.module.css';
import { DeleteWarning, EmailDialog, UsernameDialog } from '../../components';

const Input = styled('input')({
	display: 'none',
});

const AccountBlock = () => {
	const { user, logout, removeUser, changeUsername, changeEmail } = UserAuth();
	const { upload } = StorageAuth();
	const [loading, setLoading] = useState(false);
	const [openWarning, setOpenWarning] = useState(false);
	const [openUsernameDialog, setOpenUsernameDialog] = useState(false);
	const [openEmailDialog, setOpenEmailDialog] = useState(false);

	const [photo, setPhoto] = useState(null);
	const [photoURL, setPhotoURL] = useState('/static/images/avatar/1.jpg');

	const navigate = useNavigate();

	const handle_Username_Reset = async (username) => {
		try {
			await changeUsername(username);
		} catch (e) {
			console.log(e.message);
		}
	};

	//TODO POPUP?!
	//Reatuhenticate User but huuuuuuuuuuuuuuuuuuh?!!
	const handle_Email_Reset = async (email) => {
		try {
			await changeEmail(email);
		} catch (e) {
			console.log(e.message);
		}
	};

	//TODO Check if it works with google login
	//Not good when logged in with google
	const handle_Password_Reset = () => {
		navigate('/reset-password');
	};

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log(e.message);
		}
	};

	const handleDelete = async () => {
		handleCloseWarning();
		try {
			await removeUser();
			navigate('/');
		} catch (e) {
			console.log(e.message);
		}
	};

	const handleOpenWarning = () => {
		setOpenWarning(true);
	};

	const handleCloseWarning = () => {
		setOpenWarning(false);
	};

	const handle_Open_Username_Dialog = () => {
		setOpenUsernameDialog(true);
	};

	const handle_Close_Username_Dialog = () => {
		setOpenUsernameDialog(false);
	};

	const handle_Open_Email_Dialog = () => {
		setOpenEmailDialog(true);
	};

	const handle_Close_Email_Dialog = () => {
		setOpenEmailDialog(false);
	};

	useEffect(() => {
		if (user?.photoURL) {
			setPhotoURL(user.photoURL);
		}
	}, [user]);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	};

	const handleClick = () => {
		upload(photo, user, setLoading);
	};

	return (
		<div className={styles.AccountPage}>
			<div className={styles.PictureBlockWrapper}>
				<div className={styles.PictureBlock}>
					<div>
						<div className={styles.AvatarBlock}>
							<label>
								<Input
									accept="image/*"
									id="contained-button-file"
									multiple
									type="file"
									onChange={handleChange}
								/>
								<Avatar
									alt="Avatar"
									sx={{ width: 200, height: 200 }}
									src={
										user?.photoURL
											? user.photoURL
											: '/static/images/avatar/1.jpg'
									}
									className={styles.profilePicture}
								/>
							</label>
						</div>
						<div className={styles.uploadButton}>
							<Button
								variant="contained"
								component="span"
								size="large"
								disabled={loading || !photo}
								onClick={handleClick}
							>
								Upload
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.AccountInfoWrapper}>
				<div className={styles.AccountInfo}>
					<table className={styles.profileTable} width="70%">
						<tbody>
							<tr>
								<td width="40%">Username:</td>
								<td width="60%">
									{user && user.displayName}{' '}
									<AiOutlineEdit onClick={handle_Open_Username_Dialog} />
								</td>
							</tr>
							<tr>
								<td width="40%">Email: </td>
								<td width="60%">
									{user && user.email}{' '}
									<AiOutlineEdit onClick={handle_Open_Email_Dialog} />
								</td>
							</tr>
							<tr>
								<td width="40%">Password:</td>
								<td width="60%">
									Reset <AiOutlineEdit onClick={handle_Password_Reset} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className={styles.logDelButtons}>
				<div className={styles.logoutButton}>
					<Button onClick={handleLogout} size="large" variant="contained">
						Logout
					</Button>
				</div>
				<div className={styles.deleteButton}>
					<Button
						size="large"
						variant="contained"
						onClick={handleOpenWarning}
						sx={{ backgroundColor: 'red' }}
					>
						Delete Account
					</Button>
				</div>
			</div>
			<EmailDialog
				open={openEmailDialog}
				handleClose={handle_Close_Email_Dialog}
				handle_Email_Reset={handle_Email_Reset}
			></EmailDialog>
			<UsernameDialog
				open={openUsernameDialog}
				handleClose={handle_Close_Username_Dialog}
				handle_Username_Reset={handle_Username_Reset}
			/>
			<DeleteWarning
				open={openWarning}
				handleDelete={handleDelete}
				handleClose={handleCloseWarning}
			/>
		</div>
	);
};

export default AccountBlock;
