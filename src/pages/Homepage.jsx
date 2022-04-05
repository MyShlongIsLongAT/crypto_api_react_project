import React from 'react';
import { GlobalStats } from '../components';
import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<div className={styles.designBox}>
			<GlobalStats />
		</div>
	);
};

export default Homepage;
