import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	//signInWithRedirect,
	sendPasswordResetEmail,
	updateEmail,
	deleteUser,
	updateProfile,
} from 'firebase/auth';

import { auth } from './firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();

	//Create Account With Email & Password & Username
	const createUser = (email, password, username) => {
		return createUserWithEmailAndPassword(auth, email, password).then(
			async () => {
				await updateProfile(auth.currentUser, {
					displayName: username,
				});
			}
		);
	};

	//Login With Email&Password
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	//TODO Deactivate Change Email and Change Password and Change Username when logged in with google
	//Google Login
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
		//signInWithRedirect(auth, provider);
	};

	//Update Email
	const changeEmail = (email) => {
		return updateEmail(auth.currentUser, email)
			.then(() => {
				console.log('updated');
				console.log(auth.currentUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	//Update Username
	const changeUsername = (username) => {
		return updateProfile(auth.currentUser, {
			displayName: username,
		});
	};

	//Reset Password
	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	//Logout
	const logout = () => {
		localStorage.removeItem('loggedIn');
		return signOut(auth);
	};

	//Delete user
	const removeUser = () => {
		localStorage.removeItem('loggedIn');
		return deleteUser(user);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	return (
		<UserContext.Provider
			value={{
				createUser,
				user,
				logout,
				signIn,
				googleSignIn,
				resetPassword,
				changeEmail,
				removeUser,
				changeUsername,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
