import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';
import { auth } from './firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();

	//Create Account With Email&Password
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
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

	//Logout
	const logout = () => {
		sessionStorage.removeItem('loggedIn');
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	return (
		<UserContext.Provider
			value={{ createUser, user, logout, signIn, googleSignIn }}
		>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
