import React from 'react';
import styles from './MenuCard.module.scss';

const MenuCard = (props) => {
	return ( 
		<a href={props.cta} className={styles.menuCardContainer}>
			{props.content}
		</a>
	)
}

export default MenuCard;