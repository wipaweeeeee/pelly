import React from 'react';
import styles from './MenuCard.module.scss';

const MenuCard = (props) => {
	return ( 
		<div className={styles.menuCardContainer}>
			{props.content}
		</div>
	)
}

export default MenuCard;