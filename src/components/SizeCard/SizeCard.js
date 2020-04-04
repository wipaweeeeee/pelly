import React from 'react'; 
import styles from './SizeCard.module.scss';
import { PriceList } from './../helper.js';

const SizeCard = (props) => {
	let dots = [];
	let price; 

  	for ( var i = 0; i < props.count; i++) {
    	dots.push(<div key={i} className={styles.sizeCardDot}/>)
    	price = PriceList(i+1);
  	}

	return (
		<div 
			className={styles.sizeCardContainer}
			onClick={props.onClick}
		>
			<div className={styles.sizeCardContent}>
				<p>{props.count} Scoops</p>
				<span className={styles.sizeCardPrice}>${price}+</span>
			</div>
			<div className={styles.sizeCardDotContainer}>
				{dots}
			</div>
		</div>
	)
}

export default SizeCard;