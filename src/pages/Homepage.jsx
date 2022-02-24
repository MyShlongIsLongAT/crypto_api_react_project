import React from 'react';
import { GlobalStats } from '../components';
import { StatsProvider } from '../services/statsContext';

const Homepage = () => {
	return (
		<>
			<StatsProvider>
				<GlobalStats />
			</StatsProvider>
		</>
	);
};

export default Homepage;
