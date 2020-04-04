import React, { useState, useEffect } from 'react'; 
import styles from './FlavorCard.module.scss';
import check from './../../assets/check.svg';

const FlavorCard = (props) => {

	const [ select, setSelect ] = useState();
	const [ confirm, setConfirm ] = useState();

	useEffect(() => {

		const timer = setTimeout(() => {
				setConfirm(false);
		}, 1000);

		return (() => {
			clearTimeout(timer);
			setConfirm(true);
		});

	})

	return (
		<div 
			className={styles.flavorCardContainer}
			onClick={() => setSelect(!select)}
		>
			{ select && 
				<div 
					className={styles.flavorCardSelect}
					onClick={() => {
							setSelect(!select);
							props.handleAdd()
						}
					}
				>
					<span/>
				</div>
			}

			{
				props.id === props.selected && !select && !confirm &&
					<div className={styles.flavorCardConfirm}>
						<img src={check} />
					</div>
			}
			<img src={props.image} />
			<div className={styles.flavorCardName}>
				{props.content}
			</div>
		</div>
	)
}

export default FlavorCard;