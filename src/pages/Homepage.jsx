import React from 'react';
import { GlobalStats } from '../components';
import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<div className={styles.greyBox}>
			<GlobalStats />
		</div>
	);
};

export default Homepage;
