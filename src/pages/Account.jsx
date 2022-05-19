import React from 'react';
import AccountBlock from './accountComponents/AccountBlock';
import styles from './Account.module.css';

const Account = () => {
	return (
		<div className={styles.AccountPage}>
			<AccountBlock />
		</div>
	);
};

export default Account;
