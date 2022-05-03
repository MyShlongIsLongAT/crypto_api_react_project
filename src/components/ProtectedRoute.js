import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../services/authContext';

const ProtectedRoute = ({ children }) => {
	const { user } = UserAuth();

	return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;