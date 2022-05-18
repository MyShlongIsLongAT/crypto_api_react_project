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

	//Google Login
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
		//signInWithRedirect(auth, provider);
	};

	//Upadte Email
	const changeEmail = (email) => {
		return updateEmail(auth, email);
	};

	//Upadte User
	const changeUser = (username) => {
		return updateProfile(auth, username);
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
				changeUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
