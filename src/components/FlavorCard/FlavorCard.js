import React, { useState, useEffect } from 'react'; 
import styles from './FlavorCard.module.scss';
import { ItemTypes } from './../helper';
import { useDrag } from 'react-dnd';

const FlavorCard = (props) => {

	const [ select, setSelect ] = useState();
	const [ confirm, setConfirm ] = useState();

	const [ collectedProps, drag] = useDrag({
		item: { 
			type: 'scoop', 
			name: props.content, 
			image: props.image,
			id: props.id,
			selected: props.id
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		})
	})

	const isDragging = collectedProps.isDragging;

	return (
		<div 
			className={styles.flavorCardContainer}
			onClick={() => setSelect(!select)}
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1
			}}
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
			<img src={props.image} />
			<div className={styles.flavorCardName}>
				{props.content}
			</div>
		</div>
	)
}


export default React.memo(FlavorCard);