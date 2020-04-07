import React from 'react';
import styles from './ModalCard.module.scss'

const ModalCard = (props) => {
	return (
		<div className={styles.modalContainer}>
			<div className={styles.scoopCounts}>
				Only 1 of 4
				<br />
				<span>Scoops added.</span>
			</div>
			<div className={styles.buttonMain}>Continue with 1 Scoops</div>
			<div className={styles.buttonSecondary}>Go Back and Add Scoops</div>
		</div>
	)
}

export default ModalCard;