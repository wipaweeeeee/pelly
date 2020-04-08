import React from 'react';
import styles from './ModalCard.module.scss'

const ModalCard = (props) => {

	return (
		<div className={styles.modalContainer}>
			{ props.toppingModal && 
				<React.Fragment>
				<div className={styles.scoopCounts}>
					Only {props.currentScoop} of {props.scoopCount}
					<br />
					<span>Scoops added.</span>
				</div>
				<div 
					className={styles.buttonMain}
					onClick={(e) => props.handleUpgrade(e)}
				>
					Continue with {props.currentScoop} Scoops.
				</div>
				<div 
					className={styles.buttonSecondary}
					onClick={() => props.handleClose()}
				>
					Go Back and Add Scoops
				</div>
				</React.Fragment>
			}
			{
				!props.toppingModal &&
				<React.Fragment>
					<div className={styles.modalContent}>
						Would you like to make your sundae <br/> 
						<span>{props.scoopCount + 1} Scoops? </span>
					</div>
					<div 
						className={styles.buttonMain}
						onClick={(e) => props.handleUpgrade(e)}
					>
						Yes. Upgrade to {props.scoopCount + 1} Scoops.
					</div>
					<div 
						className={styles.buttonSecondary}
						onClick={() => props.handleClose()}
					>
						No. Stay with {props.scoopCount} Scoops.
					</div>
				</React.Fragment>
			}
			
		</div>
	)
}

export default ModalCard;