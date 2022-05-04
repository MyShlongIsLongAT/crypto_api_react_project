import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	return sessionStorage.getItem('loggedIn') ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
